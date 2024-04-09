export const Sidebar = ({ className, ...rest }) => {
  return (
    <div className={`flex flex-col mr-10 text-xl font-minaBold ${className}`}>
      <div>My profile</div>
      <div>My notes</div>
      <div>My letters</div>
      <div>Profile settings</div>
      <div>Logout</div>
    </div>
  );
};
