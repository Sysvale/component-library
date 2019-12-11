<template>
    <div class="d-flex">
        <div
            v-for="(n, index) in steps"
            :key="index"
            class="align-items-center"
        >
            <div class="d-flex align-items-center">
                <div
                    class="d-flex justify-content-center align-items-center"
                    :class="circleStyle(n)"
                >
                    <span
                        v-if="!n.concluded"
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
                    v-if="index !== steps.length - 1 && steps[index].concluded && steps[index + 1].concluded"
                    class="stepper_divider3"
                />
                <div 
                    v-else-if="index !== steps.length - 1 && index > 0 && steps[index].concluded && steps[index - 1].concluded"
                    class="stepper_divider2"
                />
                <div 
                    v-else-if="index !== steps.length - 1"
                    class="stepper_divider"
                />
            </div>
            <div class="label-container mt-2">
                <small>{{ n.label }}</small>
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
        circleStyle(n) {
            let style = '';

            if (n.concluded) {
                style += 'concluded_step_background';
            } else {
                style += 'circle';
            }

            if (!n.active && !n.concluded) {
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

    .stepper_divider {
        background-color: #BFC2C5;
        height: 3px;
        width: 100px;
    }

    .stepper_divider2 {
        background: linear-gradient(90deg, #43E4CC 0%, #BFC2C5 67.57%);
        height: 3px;
        width: 100px;
    }

    .stepper_divider3 {
        background: #00CBAD;
        height: 3px;
        width: 100px;
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
</style>