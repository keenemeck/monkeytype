import * as UpdateConfig from "../../config";

const subgroup: MonkeyTypes.CommandsSubgroup = {
  title: "Keymap width...",
  configKey: "keymapWidth",
  list: [
    {
      id: "setKeymapWidth100",
      display: "100",
      configValue: "100",
      exec: (): void => {
        UpdateConfig.setKeymapWidth("100");
      },
    },
    {
      id: "setKeymapWidth125",
      display: "125",
      configValue: "125",
      exec: (): void => {
        UpdateConfig.setKeymapWidth("125");
      },
    },
    {
      id: "setKeymapWidth150",
      display: "150",
      configValue: "150",
      exec: (): void => {
        UpdateConfig.setKeymapWidth("150");
      },
    },
    {
      id: "setKeymapWidth200",
      display: "200",
      configValue: "200",
      exec: (): void => {
        UpdateConfig.setKeymapWidth("200");
      },
    },
  ],
};

const commands: MonkeyTypes.Command[] = [
  {
    id: "changeKeymapWidth",
    display: "Keymap width...",
    icon: "fa-keyboard",
    subgroup,
  },
];

export default commands;
