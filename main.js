var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");
const pentboxx = document.getElementById("pentboxx");
const terminalpentbox = document.getElementById("terminalpentbox");


var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);



//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("root [/home/abdessamad]:~$ " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "./pentbox.rb":
      loopLines(pentbox, "color2 margin", 80);
      break;
      case "nmap 192.168.1.1":
      loopLines(nmap, "color2 margin", 500);
      break;
      case "telnet 192.168.1.1":
      loopLines(telnet, "color2 margin", 500);
      break;
    case "networktools":
      loopLines(networktools, "color2 margin", 80);
      break;
    case "honeypot":
      loopLines(honeypot, "color2 margin", 80);
      break;
    case "secret":
      liner.classList.add("password");
      pw = true;
      break;
    case "manualconfig":
      loopLines(manualconfig, "color2 margin", 80);
      break;
      case "23":
      loopLines(telnetport, "color2 margin", 80);
      break;
      case "yes":
      loopLines(yes, "color2 margin", 80);
      break;
      case "checkforintrusion":
      loopLines(checkforintrusion, "color2 margin", 400);
      break;
    
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
      
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
      
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
};


//-------------------------winbox-----------------//



pentboxx.addEventListener('click',() => {
    const pentwinbox =  new WinBox({
        title: 'pentbox 1.8',
        icon: "assests/logo--background.png",
        background: '#519975',
        width:'800px',
        height: '500px',
        top:'50',
        left:'300',
        right:'20',
        bottom:'20',
        border: 2,
        
        mount: terminalpentbox,
    })
});

nmapp.addEventListener('click', () => {
  const nmapwinbox = new WinBox ({
    title: 'nmap 7.93',
    icon : "assests/68747470733a2f2f63646e2e7261776769742e636f6d2f636c61726976652f636c612d706f72747363616e2d706c7567696e2f6d61737465722f7075626c69632f69636f6e2f706f72747363616e2e7376673f73616e6974697a653d74727565.svg",
    background: '#519975',
    width:'800px',
        height: '500px',
        top:'50',
        left:'300',
        right:'20',
        bottom:'20',
        border: 2,
        mount: terminalpentbox,

  })
})


/*------card steps----------*/

const nextBtn = document.getElementById("nextBtn");
const card = document.querySelector(".card");
const instructions = [
  { step: " Step 1", text: "press on /pentbox to run the terminal of pentbox ." },
  { step: " Step 2", text: "Enter cammand (./pentbox.rb) to  execute pentbox script ." },
  { step: "Step 3", text: "Now enter choise 2 (networktools), cause this tool do lot of things, and we are interesting to Honeypot mechanism ." },
  { step: "Step 4", text: "Now enter choise 3 (honeypot), ." },
  { step: "Step 5", text: "We will do it with manual configuration (manualconfig), that will help you to understand the process . " },
  { step: "Step 6", text: "Enter the port that you want to do with Honeypot. you can do it with Telnet port (23)." },
  { step: "Step 7", text: "We make a false message to convence the attacker that he enter the server successfully. then enter (yes) to save the logs " },
  { step: "Step 8", text: "Now you are done on configuring  the honey pot with success ✔ ,now go to the next step." },
  { step: "Step 9", text: "After configuring our honeypot we need to try it. so we need an attacker, but we don't have one so you will be that attacker " },
  { step: "Step 10", text: "press on /nmap to run the terminal of nmap ." },
  { step: "Step 11", text: "Enter cammand (nmap 192.168.1.1) to launching an nmap on target, nmap shows ports that are open ." },
  { step: "Step 12", text: "As you see as long as you are an attacker you will see that the Telnet port are open, and you will try to connect with it ." },
  { step: "Step 13", text: "Enter cammand (telnet 192.168.1.1), tying to connect to that port 23 of the target" },
  { step: "Step 14", text: "As you can see that false message we enter previously show" },
  { step: "Step 15", text: "Now we can say that we convince the attacker " },
  { step: "Step 16", text: "Now back to pentbox terminal to see the intrusions" },
  { step: "Step 17", text: "Enter command (checkforintrusion) to check if there any intrusions" },
  { step: "Step 18", text: "finally!! We caught this attacker. Now as you see this is all his informations. and you can do what ever you want with him. " },

];
let currentStep = 0;

nextBtn.addEventListener("click", () => {
  currentStep++;
  if (currentStep >= instructions.length) {
    currentStep = 0;
  }
  card.querySelector("h2").textContent = instructions[currentStep].step;
  card.querySelector("h4").textContent = instructions[currentStep].text;
});

