<template>
    <div class="d-flex">
        <div
            v-for="(step, index) in steps"
            :key="index"
        >
            <div
                class="d-flex align-items-center"
                @click="changeStep(index)"
            >
                <div
                    class="d-flex justify-content-center align-items-center cursor_pointer"
                    :class="circleStyle(step)"
                >
                    <span
                        v-if="!step.concluded"
                        class="not_concluded_step fs-14"
                    >
                        {{ index + 1 }}
                    </span>
                    <check-icon
                        v-else
                        size="1x"
                        class="concluded_step"
                    />
                </div>

                <div 
                    v-if="
                        index !== steps.length - 1 &&
                        steps[index].concluded &&
                        steps[index + 1].concluded
                    "
                    class="concluded_stepper_divider"
                />
                <div 
                    v-else-if="
                        (index !== steps.length - 1 &&
                        index > 0 &&
                        steps[index].concluded &&
                        steps[index - 1].concluded) ||
                        (index !== steps.length - 1 &&
                        index === 0 &&
                        steps[index].concluded)
                    "
                    class="in_progress_stepper_divider"
                />
                <div 
                    v-else-if="index !== steps.length - 1"
                    class="common_stepper_divider"
                />

            </div>
            <div class="label-container mt-2">
                <small>{{ step.label }}</small>
            </div>
        </div>
    </div>
</template>
<script>

import { CheckIcon } from 'vue-feather-icons'

export default {
    props: {
        steps: {
            type: Array,
            default: () => [],
            description: `A object with the properties 'label', and 'concluded'.
                The 'label' property is the text that will be displayed under
                the counter, and 'concluded' is the status (boolean) of the step.`,
        }
    },

    components: {
        CheckIcon,
    },

    methods: {
        circleStyle(step) {
            let style = '';

            if (step.concluded) {
                style += 'concluded_step_background';
            } else {
                style += 'circle';
            }

            if (!step.active && !step.concluded) {
                style += ' not_active';
            } else {
                style += ' cricle';
            }

            return style;
        },

        changeStep(index) {
            this.steps[index].active = true;
            this.steps.forEach((item, i) => {
                item.active = i === index ? true : false;
                
            });
            
            this.$emit('step-changed', index, this.steps[index]);
        }
    }
}
</script>
<style>
    .circle {
        border-radius: 50px;
        border: 1.5px solid #00CBAD;
        width: 30px;
        height: 30px;
    }

    .not_concluded_step {
        color: #00CBAD;
    }

    .common_stepper_divider, .in_progress_stepper_divider, .concluded_stepper_divider {
        height: 3px;
        width: 100px;
    }

    .common_stepper_divider {
        background-color: #BFC2C5;
    }

    .in_progress_stepper_divider {
        background: linear-gradient(90deg, #43E4CC 0%, #BFC2C5 67.57%);
    }

    .concluded_stepper_divider {
        background: #00CBAD;
    }

    .concluded_step {
        color: #fff;
    }

    .concluded_step_background { 
        background-color: #00CBAD;
        border-radius: 50px;
        border: 1.5px solid #00CBAD;
        width: 30px;
        height: 30px;
    }

    .label-container {
        max-width: 70px;
        margin-left: -10px;
        line-height: 1.0;
        display: block;
    }

    .fs-14 {
        font-size: 14px;
    }

    .not_active {
        color: #BFC2C5;
        border-radius: 50px;
        border: 1.5px solid #BFC2C5;
        width: 30px;
        height: 30px;
    }

    .cursor_pointer {
        cursor: pointer;
    }
</style>