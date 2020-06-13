<template>
  <div class="card">
    <div class="datepicker-wrapper">
      <button class="fab-button material-icons-outlined">add</button>
      <Datepicker mondayFirst inline></Datepicker>
    </div>
    <div class="card-footer">
      <span class="card-footer__icon material-icons-outlined">date_range</span>
      <div class="card-footer__text">
        No Events
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  components: { Datepicker }
};
</script>

<style lang="scss">
$borderRadius: 20px;
$borderRadiusShadow: 16px;
$colorPrimary: #6a5994;

.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 300px;
  height: 400px;
  border-radius: $borderRadius;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
    0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);
}

.card-footer {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0 1rem;
  color: #eecbd8;
  background: linear-gradient(
    -30deg,
    rgba(245, 200, 203, 1) 0%,
    rgba(106, 89, 148, 1) 100%
  );
}

.card-footer__icon {
  font-size: 29px;
  margin-bottom: 0.5rem;
}

.card-footer__text {
  font-weight: 700;
  font-size: 0.875rem;
  color: #f2dae2;
}

.fab-button {
  position: absolute;
  right: 20px;
  bottom: -20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 0;
  background: #80ded9;
  color: white;
}

@mixin shadow-defaults {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.25);
}

.datepicker-wrapper {
  position: relative;
  z-index: 2;
  padding: 1rem;
  border-radius: $borderRadius;
  background: #fff;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025);
  transform: translateY($borderRadius);
  margin-top: -$borderRadius;

  &::before {
    @include shadow-defaults;
    z-index: 0;
    bottom: -6px;
    width: 90%;
    height: 10px;
    border-radius: 0 0 $borderRadiusShadow $borderRadiusShadow;
  }

  &::after {
    @include shadow-defaults;
    z-index: -1;
    bottom: -12px;
    width: 82%;
    height: 20px;
    border-radius: 0 0 $borderRadiusShadow $borderRadiusShadow;
  }

  .vdp-datepicker__calendar {
    background: inherit;
    width: 100%;
    border: 0;
    font-size: 0.875rem;
    color: rgba(#090c22, 0.85);
  }

  .vdp-datepicker__calendar header span {
    font-weight: 700;
  }

  .vdp-datepicker__calendar .cell:not(.month):not(.year) {
    line-height: 38px;
    height: 38px;
    border-radius: 50%;
  }

  .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover {
    border-color: $colorPrimary;
  }

  .vdp-datepicker__calendar .cell.selected,
  .vdp-datepicker__calendar .cell.selected:hover {
    background: $colorPrimary;
    color: white;
  }

  .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover {
    border-color: $colorPrimary;
  }

  .vdp-datepicker__calendar header .prev:after {
    border-right-color: $colorPrimary;
  }

  .vdp-datepicker__calendar header .next:after {
    border-left-color: $colorPrimary;
  }

  .vdp-datepicker__calendar .cell.day-header {
    opacity: 0.57;
  }
}
</style>
