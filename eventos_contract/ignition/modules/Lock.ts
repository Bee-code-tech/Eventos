import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const fs = require("fs");

const LockModule = buildModule("LockModule", (m) => {
  const owner = m.getParameter(
    "owner",
    "0xF2E7E2f51D7C9eEa9B0313C2eCa12f8e43bd1855"
  );
  const _paymentToken = m.getParameter(
    "_paymentToken",
    "0x0B833fed511bCaaC668Fa45131Fb9f9c7601A353"
  );
  const nftAddress = m.getParameter(
    "nftAddress",
    "0xCD362CB8030e4e537AB6e145D983Bf9d5D8C9a26"
  );

  const lock = m.contract("Ventura", [owner, _paymentToken, nftAddress]);

  return { lock };
});

export default LockModule;

//Owner: 0xF2E7E2f51D7C9eEa9B0313C2eCa12f8e43bd1855
//StableToken: 0x0B833fed511bCaaC668Fa45131Fb9f9c7601A353
//VenturaTokens: 0xCD362CB8030e4e537AB6e145D983Bf9d5D8C9a26
//Ventura: 0xC2Ed1202284eBc34F76BedbfCfC65Fb1Ed315613