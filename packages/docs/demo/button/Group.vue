<template>
  <p>
    <ym-button-group type="success">
      <ym-button icon="arrow-left">上一页</ym-button>
      <ym-button >
        下一页<ym-icon icon="arrow-right" style="margin-left: 8px" />
      </ym-button>
    </ym-button-group>
  </p>
  <p>
    <ym-button-group disabled>
      <ym-button type="primary" icon="arrow-left">Previous Page</ym-button>
      <ym-button type="primary">
        Next Page<ym-icon icon="arrow-right" style="margin-left: 8px" />
      </ym-button>
    </ym-button-group>
  </p>
  <p>
    <ym-button-group type="warning" size="small">
      <ym-button type="primary" icon="edit" round />
      <ym-button type="primary" icon="share" />
      <ym-button type="primary" icon="trash" round />
    </ym-button-group>
  </p>
</template>
