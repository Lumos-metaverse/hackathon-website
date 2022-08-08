<template>
    <div class="fade_rule"></div>
</template>
<style lang="scss" scoped>
    $color-1:#36104C;
    $color-2:#36104C;
    $color-3:white;
    .fade_rule {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        background-color: $color-1;
        width: 100%;
        margin: 0 auto;
        background-image: linear-gradient(left , $color-2 2%, $color-1 50%, $color-2 98%);
        background-image: -o-linear-gradient(left , $color-2 2%, $color-1 50%, $color-2 98%);
        background-image: -moz-linear-gradient(left , $color-2 2%, $color-1 50%, $color-2 98%);
        background-image: -webkit-linear-gradient(left , $color-2 2%, $color-1 50%, $color-2 98%);
        background-image: -ms-linear-gradient(left , $color-2 2%, $color-1 50%, $color-2 98%);
        background-image: -webkit-gradient( linear, left bottom, right bottom, color-stop(0.02, $color-2), color-stop(0.5, $color-3), color-stop(0.98, $color-2) );
}
</style>