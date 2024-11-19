<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <ym-tooltip
        class="box-item"
        content="Top Left prompts info"
        placement="top-start"
      >
        <ym-button>top-start</ym-button>
      </ym-tooltip>
      <ym-tooltip
        class="box-item"
        content="Top Center prompts info"
        placement="top"
      >
        <ym-button>top</ym-button>
      </ym-tooltip>
      <ym-tooltip
        class="box-item"
        content="Top Right prompts info"
        placement="top-end"
      >
        <ym-button>top-end</ym-button>
      </ym-tooltip>
    </div>
    <div class="row">
      <ym-tooltip
        class="box-item"
        content="Left Top prompts info"
        placement="left-start"
      >
        <ym-button>left-start</ym-button>
      </ym-tooltip>
      <ym-tooltip
        class="box-item"
        content="Right Top prompts info"
        placement="right-start"
      >
        <ym-button>right-start</ym-button>
      </ym-tooltip>
    </div>
    <div class="row">
      <ym-tooltip
        class="box-item"
        content="Left Center prompts info"
        placement="left"
      >
        <ym-button class="mt-3 mb-3">left</ym-button>
      </ym-tooltip>
      <ym-tooltip
        class="box-item"
        content="Right Center prompts info"
        placement="right"
      >
        <ym-button>right</ym-button>
      </ym-tooltip>
    </div>
    <div class="row">
      <ym-tooltip
        class="box-item"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <ym-button>left-end</ym-button>
      </ym-tooltip>
      <ym-tooltip
        class="box-item"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <ym-button>right-end</ym-button>
      </ym-tooltip>
    </div>
    <div class="row center">
      <ym-tooltip
        class="box-item"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <ym-button>bottom-start</ym-button>
      </ym-tooltip>
      <ym-tooltip
        class="box-item"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <ym-button>bottom</ym-button>
      </ym-tooltip>
      <ym-tooltip
        class="box-item"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <ym-button>bottom-end</ym-button>
      </ym-tooltip>
    </div>
  </div>
</template>

<style scoped>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
