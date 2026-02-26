function loading() {
  const tunggu = document.getElementById("loadingOverlay");
  if (tunggu) {
    tunggu.style.display = "flex";

    setTimeout(() => {
      tunggu.style.display = "none";
    }, 8000);
  }
}
function Home() {
  loading();
  window.location.href = "../../index.html";
}
function stp() {
  loading();
  window.location.href = "/aset/DebitSTP.html";
}
function wwtp() {
  loading();
  window.location.href = "/aset/DebitWWTP.html";
}
function internalLAB() {
  loading();
  window.location.href = "/aset/HasilLAB.html";
}
function msds() {
  loading();
  window.location.href = "/aset/msds.html";
}

function wi() {
  loading();
  window.location.href = "/aset/wi.html";
}
function usageMaterial() {
  loading();
  window.location.href = "/aset/PenggunaanMaterial.html";
}

function klikarsip() {
  loading();
  window.location.href = "../arsip.html";
}
