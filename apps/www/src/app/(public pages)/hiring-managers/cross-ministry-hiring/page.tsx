import { Metadata } from 'next';
import Heading from '../../../../common/components/ui/heading.component';
import Hero from '../../../../common/components/ui/hero/hero.component';
import CompetitionList from '../../../../common/components/ui/hiring-manager/competition-list/competition-list.component';
import SmartLink from '../../../../common/libs/markdoc/components/nodes/smart-link.markdoc';
import { IconList, IconListItem } from '../../../../common/libs/markdoc/components/tags/icon-list';
import { wrapTitle } from '../../../../common/utils/wrap-title.util';

export const metadata: Metadata = {
  title: wrapTitle('Join a Cross-Ministry Hiring (CMH)'),
};

export default function Page() {
  return (
    <>
      <Hero title="Join a Cross-Ministry Hiring (CMH)" variant="section-heading" />
      <div className="flex flex-col gap-4">
        <div className="container flex flex-col gap-4 mx-auto">
          <Heading level={2}>Sign up for one of our upcoming competitions.</Heading>
          <p>
            Select a competition below to start our intake form. Hiring managers should be ready to sign our{' '}
            <span className="text-blue-500 underline">Service Agreement</span>.
          </p>
          <CompetitionList />
        </div>
        <div className="bg-bcgov-blue-light py-6">
          <div className="container flex flex-col gap-4 mx-auto">
            <Heading level={2}>Don't see what you're looking for?</Heading>
            <ul>
              <li className="flex flex-row gap-2">
                <span className="text-bcgov-blue-dark">→</span>
                <span>
                  <SmartLink href="/learn/hiring-managers/cross-ministry-hiring">Cross-Ministry Hiring</SmartLink>.
                  Great source of information for hiring managers new to CMH.
                </span>
              </li>
              <li className="flex flex-row gap-2">
                <span className="text-bcgov-blue-dark">→</span>
                <span>
                  <SmartLink href="/learn/hiring-managers/about-digital-talent">About our team</SmartLink>. Learn about
                  our team and our passion.
                </span>
              </li>
            </ul>
            <Heading level={3}>Positions we hire for</Heading>
            <p>We offer hiring services for:</p>
            <ul className="list list-disc ml-6">
              <li>Developers (Information Systems 18 to 30)</li>
              <li>Dev Ops Specialists (Information Systems 27)</li>
              <li>Product Manager (Information Systems 30, and Band 3)</li>
              <li>Scrum Master (Information Systems 24 and 27)</li>
              <li>Site Reliability Specialist (Information Systems 27 and 30)</li>
              <li>User Experience Designer (Information Systems 24 and 27)</li>
              <li>Users Experience Researcher (Administration Officer 24 and 27)</li>
            </ul>
            <p>
              The{' '}
              <span className="text-blue-500 underline">
                <SmartLink href="https://www2.gov.bc.ca/gov/content/careers-myhr/all-employees/pay-benefits/salaries/salarylookuptool">
                  salary look up tool
                </SmartLink>
              </span>{' '}
              helps with forecasting and budgeting for these classifications.
            </p>
          </div>
        </div>
        <div className="container mx-auto mb-4">
          <Heading level={2}>Cross-Ministry Hiring process</Heading>
          <div className="font-bold">
            <IconList>
              <IconListItem
                color="#FFFFFF"
                icon="1"
                iconBgColor="bg-bcgov-blue-dark"
                iconColor="text-white"
                text="Join an upcoming competition"
              >
                {' '}
              </IconListItem>
              <IconListItem
                color="#FFFFFF"
                icon="2"
                iconBgColor="bg-bcgov-blue-dark"
                iconColor="text-white"
                text="We create a job posting"
              >
                {' '}
              </IconListItem>
              <IconListItem
                color="#FFFFFF"
                icon="3"
                iconBgColor="bg-bcgov-blue-dark"
                iconColor="text-white"
                text="Candidates apply"
              >
                {' '}
              </IconListItem>
              <IconListItem
                color="#FFFFFF"
                icon="4"
                iconBgColor="bg-bcgov-blue-dark"
                iconColor="text-white"
                text="Assess and interview candidates"
              >
                {' '}
              </IconListItem>
              <IconListItem
                color="#FFFFFF"
                icon="5"
                iconBgColor="bg-bcgov-blue-dark"
                iconColor="text-white"
                text="We match candidates to opportunities"
              >
                {' '}
              </IconListItem>
              <IconListItem
                color="#FFFFFF"
                icon="6"
                iconBgColor="bg-bcgov-blue-dark"
                iconColor="text-white"
                text="Offers"
              >
                {' '}
              </IconListItem>
            </IconList>
          </div>
        </div>
      </div>
    </>
    // <>
    //   <Hero title="Sign Up for Cross-Ministry Hiring" variant="light" />
    //   <div className="container mx-auto flex flex-col gap-4 mb-4">
    //     <Heading className="text-bcgov-gray-dark my-8" level={1}>
    //       Which hiring are you interested in joining?
    //     </Heading>

    //     <CompetitionList />
    //   </div>
    //   <div className="p-4 bg-bcgov-blue-light">
    //     <div className="container mx-auto">
    //       <span className="font-bold">Don't see what you're looking for?</span>
    //       <div className="prose max-w-none">
    //         <p>
    //           This form is for those interested in joining Cross-Ministry Hiring only.
    //           <br />
    //           Many questions can be answered on this website, like:
    //         </p>
    //         <ul>
    //           <li>
    //             <Link className="text-blue-500" href="/learn/hiring-managers/cross-ministry-hiring">
    //               Cross-Ministry Hiring
    //             </Link>
    //             , including expectations for Hiring Managers
    //           </li>
    //           <li>
    //             <Link
    //               href="/learn/hiring-managers/about-digital-talent"
    //               className="text-blue-500
    //             "
    //             >
    //               About our team
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
