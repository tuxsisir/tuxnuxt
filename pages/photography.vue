<template>
  <div>
    <h4 class="text-xl text-center text-gray-400 mb-3">
      Photos
    </h4>
    <hr>
    <div class="grid grid-cols-8">
      <div class="md:col-start-2 col-start-1 md:col-span-6 col-span-8">
        <figure class="mb-3">
          <img
            src="~/static/photos/coquitlam-view.jpg"
            alt="coquitlam-view"
          >
          <figcaption>Photo taken with Samsung Galaxy Note 10 Lite</figcaption>
        </figure>
      </div>
    </div>
    <div class="mt-4 italic">
      More to update ...
    </div>
  </div>
</template>
<script>
export default {
  name: 'TuxPhotos'
}
</script>
