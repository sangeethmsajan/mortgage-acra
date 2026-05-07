const authService = require('./auth.service');

exports.login = async (req, res) => {
  try {
    const result = await authService.login(req.body);
    res.json(result);
  } catch (err) {
    res.status(401).json({ message: err.message });
  } 
};
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Missing fields' });
    }
    // console.log(req.body);
    const user = await authService.register(email, password);

    res.status(201).json({
      message: 'User registered',
      data: user
    });

  } catch (err) {
    res.status(400).json({
      message: err.message
    });
  }
}

exports.getUsers = async (req, res) => {
  const data = [{'name' : 'John'}, {'name' : 'Doe'}];
  res.json(data);
};

// exports.logout = async (req, res) => {
//   const data = await service.getById(req.params.id);
//   res.json(data);
// };
