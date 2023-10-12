<template>
    <div class="2xl:container 2xl:mx-auto">
        <div class="">
            <div class="flex justify-between items-center mb-4">
                <!-- filters Button (md and plus Screen) -->
                <button @click="show = !show"
                    class="cursor-pointer sm:flex hidden hover:opacity-80 py-3 px-6 bg-cyan-dark flex text-base leading-4 font-normal text-white justify-center items-center">
                    <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 4V8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 12V20" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 4V14" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12 18V20" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18 4V5" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M18 9V20" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    Filters
                </button>
            </div>
            <!-- Filters Button (Small Screen) -->

            <button @click="show = !show"
                class="cursor-pointer mt-6 block sm:hidden hover:opacity-80 py-2 w-full bg-cyan-dark flex text-base leading-4 font-normal text-white justify-center items-center">
                <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 4V8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 12V20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 4V14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 18V20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 4V5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 9V20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Filters
            </button>
        </div>

        <div id="filterSection" v-if="show" class="block relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 w-full">
            <!-- Cross button Code -->
            <div @click="show = false" class="cursor-pointer absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4">
                <svg class="lg:w-6 lg:h-6 w-4 h-4" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 1L1 25" stroke="#1F2937" stroke-width="1.25" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M1 1L25 25" stroke="#27272A" stroke-width="1.25" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <hr class="bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
            <form @submit.prevent="filter">

                <div>
                    <div class="flex space-x-2">

                        <p class="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-grayish-cyan-dark">
                            Role
                        </p>
                    </div>
                    <div class="md:flex flex-col mt-8 gap-y-4 flex-wrap">

                        <div v-for="(role, index) in roles" :key="index"
                            class="flex md:justify-start md:items-center items-center">
                            <label class="flex items-center mr-2 text-base leading-3 font-normal text-grayish-cyan-medium">
                                <input type="radio" :value="role.value" v-model="selectedRole"
                                    class="text-cyan-dark accent-grayish-cyan-dark w-5 h-5 mr-2 focus:ring-cyan-dark focus:ring-opacity-25 border border-gray-300 rounded" />
                                {{ role.label }}
                            </label>
                        </div>
                    </div>
                </div>

                <hr class="bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

                <div>
                    <div class="flex space-x-2">

                        <p class="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-grayish-cyan-dark">
                            Level
                        </p>
                    </div>
                    <div class="md:flex flex-col mt-8 gap-y-4 flex-wrap">

                        <div v-for="(level, index) in levels" :key="index"
                            class="flex md:justify-start md:items-center items-center">
                            <label class="flex items-center mr-2 text-base leading-3 font-normal text-grayish-cyan-medium">
                                <input type="radio" :value="level.value" v-model="selectedLevel"
                                    class="text-cyan-dark accent-grayish-cyan-dark w-5 h-5 mr-2 focus:ring-cyan-dark focus:ring-opacity-25 border border-gray-300 rounded" />
                                {{ level.label }}
                            </label>
                        </div>
                    </div>
                </div>

                <hr class="bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

                <div>
                    <div class="flex space-x-2">

                        <p class="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-grayish-cyan-dark">
                            Languages
                        </p>
                    </div>
                    <div class="md:flex flex-col mt-8 gap-y-4 flex-wrap">

                        <div v-for="(language, index) in languages" :key="index"
                            class="flex md:justify-start md:items-center items-center">
                            <label class="flex items-center mr-2 text-base leading-3 font-normal text-grayish-cyan-medium">
                                <input type="checkbox" :value="language.value" v-model="selectedLanguages"
                                    class="text-cyan-dark accent-grayish-cyan-dark w-5 h-5 mr-2 focus:ring-cyan-dark focus:ring-opacity-25 border border-gray-300 rounded" />
                                {{ language.label }}
                            </label>
                        </div>
                    </div>
                </div>

                <hr class="bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

                <div>
                    <div class="flex space-x-2">

                        <p class="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-grayish-cyan-dark">
                            Tools
                        </p>
                    </div>
                    <div class="md:flex flex-col mt-8 gap-y-4 flex-wrap">

                        <div v-for="(tool, index) in tools" :key="index"
                            class="flex md:justify-start md:items-center items-center">
                            <label class="flex items-center mr-2 text-base leading-3 font-normal text-grayish-cyan-medium">
                                <input type="checkbox" :value="tool.value" v-model="selectedTools"
                                    class="text-white accent-grayish-cyan-dark checked w-5 h-5 mr-2 focus:ring-cyan-dark focus:ring-opacity-25 border border-gray-300 rounded" />
                                {{ tool.label }}
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Apply Filter Button (Large Screen) -->

                <div class="hidden md:block absolute right-0 bottom-0 md:py-10 lg:px-20 md:px-6 py-9 px-4">
                    <button class="hover:opacity-80 text-base leading-4 font-medium py-4 px-10 text-white bg-cyan-dark">
                        Apply Filter
                    </button>
                </div>

                <!-- Apply Filter Button (Table or lower Screen) -->

                <div class="block md:hidden w-full mt-10">
                    <button
                        class="w-full hover:opacity-80 text-base leading-4 font-medium py-4 px-10 text-white bg-cyan-dark">
                        Apply Filter
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useJobStore } from '../stores/jobs';

const show = ref(false)

const jobStore = useJobStore()

const selectedRole = ref('');
const selectedLevel = ref('');
const selectedLanguages = ref([]);
const selectedTools = ref([]);

const state = reactive({
    role: '',
    level: '',
    languages: '',
    tools: ''
})

const roles = ref([
    { label: 'Frontend', value: 'Frontend' },
    { label: 'Backend', value: 'Backend' },
    { label: 'Fullstack', value: 'Fullstack' },
]);

const levels = ref([
    { label: 'Junior', value: 'Junior' },
    { label: 'Midweight', value: 'Midweight' },
    { label: 'Senior', value: 'Senior' },
]);

const languages = ref([
    { label: 'HTML', value: 'HTML' },
    { label: 'CSS', value: 'CSS' },
    { label: 'JS', value: 'JS' },
    { label: 'C#', value: 'C#' },
    { label: 'Python', value: 'Python' },
    { label: 'ASP.NET', value: 'ASP.NET' },
]);

const tools = ref([
    { label: 'React', value: 'React' },
    { label: 'Vue', value: 'Vue' },
    { label: 'Angular', value: 'Angular' },
    { label: 'Django', value: 'Django' },
]);

function filter() {
    state.role = selectedRole.value
    state.level = selectedLevel.value
    state.languages = selectedLanguages.value.join(',')
    state.tools = selectedTools.value.join(',')
    console.log("STATE", state.tools)

    jobStore.fetchJobs(`http://localhost:3000/api/jobs?${state.role ? `role=${state.role}` : ''}${state.level ? `&level=${state.level}` : ''}${state.languages ? `&languages=${state.languages}` : ''}${state.tools ? `&tools=${state.tools}` : ''}`)
}

</script>


<style>
.checkbox:checked+.check-icon {
    display: flex;
}
</style>
