<script>
import { ComponentLibrarySample } from '@/entry';
export default {
    name:  'ComponentLibraryDev', // vue library dev component
    components: {
        ComponentLibrarySample,
    },
}
</script>

<template>
    <div class="component-library-dev">
        <component-library-sample></component-library-sample>
    </div>
</template>

<style scoped>
    .component-library-dev {
        display: block;
        width: 400px;
        margin: 25px auto;
    }
</style>
