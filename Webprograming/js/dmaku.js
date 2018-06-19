
var buttons = document.querySelectorAll(".radmenu a");

for (var i=0, l=buttons.length; i<l; i++)
{
  var button = buttons[i];
  button.onclick = setSelected;
}

function setSelected(e)
{
    if (this.classList.contains("selected"))
	{
      this.classList.remove("selected");
      if (!this.parentNode.classList.contains("radmenu"))
	  {
        this.parentNode.parentNode.parentNode.querySelector("a").classList.add("selected");
		console.log("classList.add(selected)");
      } 
	  else
	  {
        this.classList.add("show");
		console.log("classList.add(show)");
      }
    } 
	else
	{
      this.classList.add("selected");
      if (!this.parentNode.classList.contains("radmenu"))
	  {
        this.parentNode.parentNode.parentNode.querySelector("a").classList.remove("selected");
		console.log("classList.remove(selected)");
      }
	  else
	  {
        this.classList.remove("show");
		console.log("classList.remove(show)");
      }
    }
	console.log(this.a());
    return false;
}
