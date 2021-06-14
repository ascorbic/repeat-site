import React from "react";
import RepeatHero from "../global/hero";
import SectionHeader from "../global/section-header";
import Stats from "../global/stats";
import InTheMedia from "../global/in-the-media";

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

const media = [
  { date: "July 22, 2010 – The Washington Post", title: "How Biden Could Deliver Climate Goals" },
  { date: "July 15, 2010 – The New York Times", title: "Joe Biden Takes Climate Change Seriously - The New York Times" },
  { date: "June 30, 2010 – MSNBC", title: "Why the House Republicans' plan to fight climate change matters" },
  { date: "June 28, 2010 – Insider", title: "Greta Thunberg isn't the only trailblazing young climate leader. Activists from the Amazon to Nigeria share their ideas for battling the climate crisis." },
  { date: "June 12, 2010 – Ars Technica", title: "Dutch court orders Shell oil company to cut carbon emissions 45% by 2030" },
  { date: "May 28, 2010 – The Washington Post", title: "ExxonMobil rebel shareholders win board seats " },
];
const RepeatMedia = () => {
  return (
    <React.Fragment>
      <RepeatHero backgroundClass="bg-media-cover bg-center bg-fixed bg-cover bg-no-repeat" />
      <div className="w-screen -mt-20 text-repeat-black pb-40">
        <div className="container pl-20 max-w-screen-lg bg-white rounded-tr-2xl border-t-4 border-repeat">
          <div className="container max-w-screen-md m-auto px-8 md:px-0 md:pl-40">
            <h2 className="md:text-4xl pt-8 font-extrabold font-obliqua">
              Zero Lab + The Repeat <br />
              Project in the Media
            </h2>
            <p className="font-utopia pt-6 text-repeat-burnt">Proin a vestibulum dui. Cras vitae erat felis. Mauris ullamcorper est sit amet velit ultrices egestas. Duis sit amet fringilla risus, non auctor eros. Nulla id tellus ac lectus ornare convallis. Pellentesque efficitur risus ligula, a ullamcorper ipsum porttitor quis.</p>
            <div className="pt-8">
              <div className="block">
                <img src="images/vox-media.png" className="w-2/3" alt="" />
              </div>
              <div className="block text-xs pt-2">July 27, 2010 – Vox</div>
              <div className="md:text-2xl pt-2 font-black">E-Commerce Mega-Warehouses, a Smog Source, Faces New Pollution Regulations</div>
              <p>Nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="pt-6 md:w-4/5 leading-7">
              <b>Princeton University Zero Lab</b>
              <p className="pt-3">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy.</p>
              <p className="pt-3">Nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>
            {media.map((m, i) => {
              return (
                <div className="pt-6" key={i}>
                  <div className="block text-xs pt-2">{m.date}</div>
                  <div className="block font-semibold text-md pt-2">{m.title}</div>
                </div>
              );
            })}
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

export default RepeatMedia;
