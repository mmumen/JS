const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('verify before adding a user', () => {
    let user = new User(2345,"Mohamed", "mohamed@generation.org");
    expect(usercontroller.getUsers()).not.toContain(user);
    userController.add(user); 
});

test('verification controluser before removing', ( =>) )
