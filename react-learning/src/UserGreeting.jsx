function UserGreeting({username="Guest", isLogin = false}) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {username}</h2>
  );
  const loginPrompt = (
    <h2 className="login-prompt">Please login to continue</h2>
  );
  return isLogin ? welcomeMessage : loginPrompt;
}

export default UserGreeting;
