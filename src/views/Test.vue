<template>

<div>
    <h1>header</h1>
    <slot name="header" :names="names"></slot>
    <h1>body</h1>
    <slot name="body"></slot>
    <h1>footer</h1>
    <slot name="footer"></slot>
    <slot></slot>
</div>
</template>

<script>
export default {
    data(){
        return {
            names: 'lee'
        }
    }
}
</script>