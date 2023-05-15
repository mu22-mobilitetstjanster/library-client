<script lang="ts">
import type { Book } from '@/model/book';
import bookService from '@/service/bookService';
import BookList from '@/components/BookList.vue';


const data = {
  books: new Array<Book>()
}

export default {
  components: { BookList },
  data() { return data },
  created() {
    bookService
      .getAll()
      .then(data => this.books = data);
  }
}

</script>

<template>
  <h2>Library page</h2>

  <BookList :books="books"/>
</template>


<style scoped>
li {
  color: white;
  font-size: 1.1rem;
}
</style>