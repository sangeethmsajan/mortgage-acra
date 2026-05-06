// const service = require('./auth.service');
const users = [
  { id: 1, username: 'user1', password: 'password1' }
];
const authService = require('./auth.service');
exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
  // const user = users.find(user => {user.username === username && user.password === password})
  // const data = [
  //   {
  //     'name': 'san',
  //     'post': 'post1'
  //   },
  //   {
  //     'name': 'gopu',
  //     'post': 'post2'
  //   }
  // ]
  // const data = await service.create(req.body);
  res.json(data);
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


// exports.logout = async (req, res) => {
//   const data = await service.getById(req.params.id);
//   res.json(data);
// };
