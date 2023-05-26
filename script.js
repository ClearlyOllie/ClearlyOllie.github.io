function showNavMenu() {
  var men = document.getElementById('compactMenu');
  var bar = document.getElementById('bar');

  if (men.style.display === 'none') {
    men.style.display = 'block';
    bar.style.display = 'block';
  } else {
    men.style.display = 'none';
    bar.style.display = 'none';
  }


}