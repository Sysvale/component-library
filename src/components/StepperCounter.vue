<template>
    <div class="d-flex justify-content-between">
        <div
            v-for="(step, index) in steps"
            :key="index"
            class="w-100"
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
                        class="not_concluded_step_text_color fs-14"
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
                style += 'concluded_step';
            } else {
                style += 'active_step';
            }

            if (!step.active && !step.concluded) {
                style += ' not_active_step';
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
    .active_step, .not_active_step, .concluded_step {
        border-radius: 50px;
        min-width: 30px;
        min-height: 30px;
        border: 1.5px;
        border-style: solid;
    }

    .active_step {
        border-color: #00CBAD;
    }

    .concluded_step { 
        background-color: #00CBAD;
        border-color: #00CBAD;
        width: 30px;
        height: 30px;
    }

    .not_active_step {
        color: #BFC2C5;
        border-color: #BFC2C5;
    }

    .not_concluded_step_text_color {
        color: #00CBAD;
    }

    .common_stepper_divider, .in_progress_stepper_divider, .concluded_stepper_divider {
        height: 3px;
        width: 83%;
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

    .label-container {
        max-width: 70px;
        margin-left: -10px;
        line-height: 1.0;
        display: block;
    }

    .fs-14 {
        font-size: 14px;
    }

    .cursor_pointer {
        cursor: pointer;
    }
</style>