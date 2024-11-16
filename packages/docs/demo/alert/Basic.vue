<template>
  <h2>通过 slot 传入内容</h2>
  <div style="max-width: 600px">
    <ym-alert type="success">Success alert</ym-alert>
    <ym-alert type="info">Info alert</ym-alert>
    <ym-alert type="warning">Warning alert</ym-alert>
    <ym-alert type="danger">Error alert</ym-alert>
  </div>
  <h2>通过 prop 传入内容</h2>
  <div style="max-width: 600px">
    <ym-alert type="success" title="Success alert" />
    <ym-alert type="info" title="Info alert" />
    <ym-alert type="warning" title="Warning alert" />
    <ym-alert type="danger" title="Error alert" />
  </div>
</template>
