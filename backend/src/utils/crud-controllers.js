export const createDocument = (model) => async (req, res) => {
  try {
    const document = await model.create({ ...req.body });
    res.status(201).json({ data: document });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};

export const crudControllers = (model) => ({
  createDocument: createDocument(model),
});
