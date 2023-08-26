import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../event-store/utils/create-command-handler.util';
import { SkillEvents } from '../../events';
import { decider } from '../../skill.decider';
import { UpdateSkillCommand } from './update-skill.command';

@CommandHandler(UpdateSkillCommand)
export class UpdateSkillHandler implements ICommandHandler<UpdateSkillCommand> {
  private readonly streamId = (command: UpdateSkillCommand) => `skill-${command.data.id}`;

  private readonly handle: (command: UpdateSkillCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: UpdateSkillCommand): Promise<any> {
    const { result, events }: CommandHandlerResult = await this.handle(command);

    if (result.success === true) {
      const nestEvents = events.map(({ type, data, metadata }) =>
        plainToInstance(SkillEvents[type], { type, data, metadata }),
      );

      this.eventBus.publishAll(nestEvents);
    }

    return command;
  }
}
