import Stats from "../global/stats";
const graphic1 = {
  header: "Policy Score Card",
  background: "",
  stats: [
    {
      value: "3,265",
      label: "Million metric tons reduction in CO2",
      supportingText: "In GHG emissions",
    },
    {
      value: "152,378",
      label: "Net jobs of employment impact",
      supportingText: "In the energy sector",
    },
    {
      value: "154,022",
      label: "Thousand avoided deaths",
      supportingText: "From reduced air pollution",
    },
  ],
};
const graphic2 = {
  header: "Policy Score Card",
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
const graphic3 = {
  header: "Policy Score Card",
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
export const policies = {
  "biden-administration-plan": {
    header: "The Biden Administration Climate Program",
    subHeader: "Quisque ullamcorper massa augue, sodales a elit congue, ut tempus ex tincidunt. Nulla eu magna neque.",
    contentBlocks: [
      {
        type: "paragraph",
        content:
          "Nunc ac velit mollis, consectetur nisi non, tempor odio. Morbi id purus tellus. Donec in urna eu sapien ultricies volutpat. Etiam feugiat in nisi vel semper. At eleifend mi porttitor non. In lacinia lacus vitae augue pharetra consequat. Vivamus porttitor nisi in enim sagittis ultrices. Nulla luctus magna aliquam lectus eleifend tincidunt. Fusce mauris nisl, blandit eget porttitor in, ultricies vitae neque. In aliquet porttitor nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis ante sed turpis porttitor, vehicula tincidunt ex facilisis.",
      },
      {
        type: "component",
        content: <Stats stats={graphic1} />,
      },
      {
        type: "component",
        content: <div className="bg-repeat-light py-20 text-center text-white rounded-xl text-3xl">Image Carousel placeholder</div>,
      },
      {
        type: "paragraph",
        content:
          "Donec in urna eu sapien ultricies volutpat. Etiam feugiat in nisi vel semper. Donec gravida cursus justo, at eleifend mi porttitor non. In lacinia lacus vitae augue pharetra consequat. Vivamus porttitor nisi in enim sagittis ultrices. Nulla luctus magna aliquam lectus eleifend tincidunt. Fusce mauris nisl, blandit eget porttitor in, ultricies vitae neque. In aliquet porttitor nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis ante sed turpis porttitor, vehicula tincidunt ex facilisis.",
      },
      {
        type: "heading",
        content: "Policy REPEAT Pillars",
      },
      {
        type: "paragraph",
        content: "Nulla luctus magna aliquam lectus eleifend tincidunt. Fusce mauris nisl, blandit eget porttitor in, ultricies vitae neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        type: "component",
        content: <Stats stats={graphic3} />,
      },
      {
        type: "paragraph",
        content:
          "Sed hendrerit nibh non enim scelerisque mattis. Proin vel risus diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus accumsan urna eget enim varius scelerisque. Nam interdum neque non ex sagittis molestie. Nullam sed nisi id justo suscipit dapibus eget ac lectus. In placerat semper urna at vehicula. Nullam suscipit leo ipsum, sed convallis neque imperdiet id. Suspendisse sit amet malesuada quam. Quisque scelerisque vitae odio a consequat. Pellentesque rutrum diam facilisis congue malesuada. Duis nisi nulla, maximus aliquet consequat et, auctor vel eros.",
      },
      {
        type: "paragraph",
        content:
          "Donec ut ipsum ac mauris ullamcorper facilisis eget quis odio. Nulla facilisi. Maecenas efficitur dolor eget venenatis rutrum. Mauris porttitor lacinia egestas. Mauris ut molestie metus. Donec gravida dolor quis dignissim elementum. Nullam sem tellus, convallis eu velit eget, suscipit mattis risus. Phasellus rhoncus felis a pellentesque vulputate. Duis vitae justo non erat maximus lobortis et nec est. Aenean consequat arcu sed mi tempor tincidunt. Phasellus nec ex vitae urna tristique ultrices sed non nulla. Pellentesque posuere felis at egestas viverra. Pellentesque at gravida nulla, ac pharetra nulla. Donec et dui quis nisl commodo faucibus. Suspendisse elementum eleifend condimentum.",
      },
    ],
  },
  "cres-climate-agenda": {},
  "sba-green-recovery-fund": {},
  "green-new-deal": {},
};
