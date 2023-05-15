<script lang="ts">
import type { Book } from '@/model/book';


export default {
  props: {books: Array<Book>}
}
</script>

<template>
  <ul>
    <li v-for="book in books">
      <p>Author: {{ book.author }}</p>
      <p>Title: {{ book.title }}</p>
    </li>
  </ul>
</template>