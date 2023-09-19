let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor:"<span style='color: #ff38cc;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ff38cc;"> UX-UI| Product Design Engineer | Coolhunting | Research</span>')

  .pauseFor(200)
  .deleteChars(10)
  .start();
