<template>
  <div>
    <h4 class="text-xl text-center text-gray-400 mb-3">
      Photography
    </h4>
    <hr>
    <div class="italic text-gray-500 my-3">
      I love photography, I am not good at it (trying) but somehow I manage to eke out some photos here and there. I
      like to keep them!
    </div>

    <div class="grid grid-cols-8">
      <div class="md:col-start-2 col-start-1 md:col-span-6 col-span-8">
        <figure class="mb-3">
          <img
            src="~/static/photos/coquitlam-view.jpg"
            alt="coquitlam-view"
          >
          <figcaption>Photo taken with Samsung Galaxy Note 10 Lite</figcaption>
        </figure>
        <blockquote>
          <p>Scenic View of Coquitlam from Surrey</p>
        </blockquote>
      </div>
    </div>
    <div class="mt-4 italic">
      More to update ...
    </div>
  </div>
</template>
<script>
export default {
  name: 'TuxPhotography'
}
</script>
<style>
figure {
  position: relative;
  border: thin #c0c0c0 solid;
  padding: 5px;
  margin: auto;
}
blockquote {
  margin-top: 0.3rem;
  padding: 0.3em 1em;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-left: .25em solid #ced2d9;
  font-style: italic;
  font-weight: 400;
  color: #323e4d;
  background: 0 0;
}
figcaption {
  position: absolute;
  top: 1em;
  right: 5px;
  font-style: italic;
  color: #323e4d;
  background: #fff;
    background-clip: border-box;
  border: solid 1px #fff;
  padding: 2px;
  line-height: 2.6em;
  font-size: .8em;
  background-clip: content-box;
}
figcaption::after, figcaption::before {
  content: "\00a0 \00a0 ";
}
</style>
