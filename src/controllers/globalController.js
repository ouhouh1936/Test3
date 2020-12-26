import Tools from "../models/Tools";

const homeController = (req, res) => {
  res.render("screens/home");
};

const toolsController = async (req, res) => {
  const toolsList = await Tools.find({}, {});

  res.render("screens/tools", { toolsList });
};

const globalController = {
  homeController,
  toolsController,
};

export default globalController;
