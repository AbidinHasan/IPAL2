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
function Tahun2025() {
  loading();
  window.location.href = "data_arsip_2025.html";
}
function Tahun2026() {
  loading();
  window.location.href = "data_arsip_2026.html";
}

function klikarsip() {
  loading();
  window.location.href = "arsip.html";
}
function stp2025() {
  loading();
  window.location.href = "/dokumenArsip/2025/STParsip2025.html";
}
function wwtp2025() {
  loading();
  window.location.href = "/dokumenArsip/2025/WWTParsip2025.html";
}
function lab2025() {
  loading();
  window.location.href = "/dokumenArsip/2025/HasilLab2025.html";
}
function labex2025() {
  loading();
  window.location.href = "/dokumenArsip/2025/LabExternal2025.html";
}
function usageMaterial2025() {
  loading();
  window.location.href = "/dokumenArsip/2025/MaterialUsage2025.html";
}

function stp2026() {
  loading();
  window.location.href = "/dokumenArsip/2026/STParsip2026.html";
}
function wwtp2026() {
  loading();
  window.location.href = "/dokumenArsip/2026/WWTParsip2026.html";
}
function lab2026() {
  loading();
  window.location.href = "/dokumenArsip/2026/HasilLab2026.html";
}
function labex2026() {
  loading();
  window.location.href = "/dokumenArsip/2026/LabExternal2026.html";
}
function usageMaterial2026() {
  loading();
  window.location.href = "/dokumenArsip/2026/MaterialUsage2026.html";
}
