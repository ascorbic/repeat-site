import React from "react";
import RepeatHero from "../global/hero";
import SectionHeader from "../global/section-header";
import Stats from "../global/stats";
import InTheMedia from "../global/in-the-media";

const team = [
  {
    name: "Hugo Ackerson",
    title: "Project Director",
  },
  {
    name: "Catherin Bashaw",
    title: "Lead Programmer",
  },
  {
    name: "Yadira Billie",
    title: "Data Director",
  },
  {
    name: "Cierra Ensley",
    title: "Lead Scientist",
  },
  {
    name: "Pearle McPhillips",
    title: "Lead Programmer",
  },
  {
    name: "Onita Harnois",
    title: "Intern",
  },
  {
    name: "Elias Wieczorek",
    title: "Intern",
  },
];
const stats = {
  header: "The Biden Administration Climate Program",
  background: "",
  stats: [
    {
      value: "78%",
      label: "Increase in Renewables",
      supportingText: "By 2050",
    },
    {
      value: "13.5%",
      label: "Average Annual Reduction in Fossil Fuels",
      supportingText: "Starting in 2023",
    },
    {
      value: "16 Million",
      label: "New Roles Created",
      supportingText: "In Energy Industries",
    },
  ],
};
const RepeatAbout = () => {
  return (
    <React.Fragment>
      <RepeatHero backgroundClass="bg-about-cover bg-center bg-fixed bg-cover bg-no-repeat" />
      <div className="w-screen -mt-20 text-repeat-black">
        <div className="container pl-20 max-w-screen-lg bg-white rounded-tr-2xl border-t-4 border-repeat">
          <div className="container max-w-screen-md m-auto px-8 md:px-0 md:pl-40">
            <h2 className="md:text-3xl pt-8 font-extrabold font-obliqua">A New Tool for Evaluating Climate Policy</h2>
            <p className="font-utopia pt-6 text-repeat-burnt">Maintained by the Princeton Zero Lab, the REPEAT Project provides environmental and economic evaluation of climate policies as they’re proposed.</p>
            <div className="pt-8 inline-block">
              <div className="block text-3xl border-4 border-repeat text-center py-5 font-mono relative">
                <div className="block -top-6 w-full absolute">
                  <span className="bg-white text-xs font-mono text-repeat py-1 px-3 uppercase">Princeton University</span>
                </div>
                ZERO LAB
              </div>
              <span className="block pt-2 text-xs px-4 font-mono font-bold text-repeat-black">
                <span className="text-repeat">Z</span>ero-carbon&nbsp;
                <span className="text-repeat">E</span>nergy Systems&nbsp;
                <span className="text-repeat">R</span>esearch and&nbsp;
                <span className="text-repeat">O</span>ptimization&nbsp;
                <span className="text-repeat">Lab</span>oratory&nbsp;
              </span>
            </div>

            <div className="pt-6 md:w-4/5 leading-7">
              <b>Princeton University Zero Lab</b>
              <p className="pt-3">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy.</p>
              <p className="pt-3">Nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen text-repeat-black">
        <div className="container pl-20 max-w-screen pb-10">
          <div className="md:w-3/4 pt-10 px-8 md:px-0 md:pl-60">
            <div className="grid pl-10 grid-cols-4 gap-5">
              {team.map((member) => (
                <div key={member.name} className="py-2 px-3 text-center">
                  <img className="w-full rounded-full" src={`images/${member.name.split(" ").join("-").toLocaleLowerCase()}.svg`} alt={member.name} />
                  <div className="text-center pt-2">
                    <h3 className="font-bold">{member.name}</h3>
                    <h5 className="text-sm">{member.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen text-repeat-black pb-20">
        <div className="container pl-20 max-w-screen-lg bg-white">
          <div className="container max-w-screen-md m-auto px-8 md:px-0 md:pl-40">
            <div className="md:w-4/5 leading-7">
              <p className="pt-3">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy.</p>
              <p className="pt-3">Nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="md:w-4/5 leading-7 pt-10">
              <img src="images/evolved-energy-research.svg" alt="" />
            </div>

            <div className="md:w-4/5 leading-7 pt-10">
              <b>Evolved Energy Research</b>
              <p className="pt-3">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="md:w-4/5 leading-7 pt-10">
              <b>Carbon Impact Consulting</b>
              <p className="pt-3">Greg Schivley dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>

            <div className="md:w-4/5 leading-7 pt-10">
              <b>Montara Mountain Energy</b>
              <p className="pt-3">Greg Schivley dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>

            <div className="md:w-4/5 leading-7 pt-10">
              <b>The Net Zero America Project</b>
              <p className="pt-3">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="md:w-4/5 leading-7 pt-10">
              <img src="images/Princeton_NZA_Interim_Report_15_Dec_2020.svg" alt="" />
            </div>

            <div className="md:w-4/5 leading-7 pt-10">
              <p className="pt-3">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy.</p>
            </div>
          </div>
        </div>
      </div>

      <SectionHeader headerText="evaluate the policies" subheaderText="Out data set currently features the Biden administration’s climate program. More policies will become available as their data are integrated with the REPEAT Project." />

      <Stats stats={stats} />
      <div className="py-8"></div>
      <InTheMedia />
    </React.Fragment>
  );
};

export default RepeatAbout;
