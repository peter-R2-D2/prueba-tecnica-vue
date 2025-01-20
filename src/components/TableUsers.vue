<template>
  <div class="container mx-auto">
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white ">
        <thead>
          <tr class=" border-b py-3">
            <th class=" p-4 text-left text-sm font-medium text-black">ID</th>
            <th class=" p-4 text-left text-sm font-medium text-gray-600">Name</th>
            <th class=" p-4 text-left text-sm font-medium text-gray-600">Email</th>
            <th class=" p-4 text-left text-sm font-medium text-gray-600">Website</th>
            <th class=" p-4 text-left text-sm font-medium text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in store.users" :key="user.id" class="border-b hover:bg-gray-200">
            <td class=" p-4 text-sm text-black">{{ user.id }}</td>
            <td class=" p-4 text-sm text-black">{{ user.name }}</td>
            <td class=" p-4 text-sm text-black">{{ user.email }}</td>
            <td class=" p-4 text-sm text-black">{{ user.website }}</td>
            <td class="p-4 flex items-center gap-4">
              <button>
                <Icon icon="mdi:pencil" class="text-2xl text-green-500" />
              </button>
              <button>
                <Icon icon="mdi:trash" class="text-2xl text-red-500" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useUserStore } from '../store/users';

const store = useUserStore()


store.GET_USERS()
</script>