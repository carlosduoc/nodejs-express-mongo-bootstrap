import Task from "../models/Task.js";

export const renderTasks = async (req, res) => {
  try {
    const tasks = await Task.find().lean();

    res.render("index.hbs", { tasks: tasks });
  } catch (error) {
    console.log(error);
  }
};

export const aboutTask = (req, res) => {
  res.render("about.hbs");
};

export const addTask = async (req, res) => {
  const task = Task(req.body);
  await task.save();
  res.redirect("/");
};

export const editTask = async (req, res) => {
  const task = await Task.findById(req.params.id).lean();

  res.render("edit", { task });
};

export const updateTask = async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect("/");
};

export const toggleTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};
