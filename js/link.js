function loading() {
  const tunggu = document.getElementById("loadingOverlay");
  if (tunggu) {
    tunggu.style.display = "flex";

    setTimeout(() => {
      tunggu.style.display = "none";
    }, 10000);
  }
}

function Home() {
  loading();
  window.location.href = "../index.html";
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
function diagram() {
  loading();
  window.location.href = "/aset/chart.html";
}

function wi() {
  loading();
  window.location.href = "/aset/wi.html";
}
function tentang() {
  loading();
  window.location.href = "/aset/tentang.html";
}

function klikarsip() {
  loading();
  window.location.href = "../dokumenArsip/arsip.html";
}
function usageMaterial() {
  loading();
  window.location.href = "/aset/PenggunaanMaterial.html";
}
