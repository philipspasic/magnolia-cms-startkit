<template>
  <div>
    <EditableArea v-if="header || (sharedComponents && sharedComponents.header)" :content="header || sharedComponents.header" />

    <main>
      <EditableArea v-if="main" :content="main" />
    </main>

    <EditableArea v-if="footer || (sharedComponents && sharedComponents.footer)" :content="footer || sharedComponents.footer" />
  </div>
</template>

<script>
import { EditableArea } from "@magnolia/vue-editor";
import { mapState } from "pinia";
import { usePagesStore } from "@/store/pages";

export default {
  name: "BasicPage",
  components: {
    EditableArea,
  },
  props: ["title", "metadata", "main", "header", "footer"],
  computed: {
    ...mapState(usePagesStore, ['sharedComponents'])
  }
};
</script>
