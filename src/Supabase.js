import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://xftjoyrggcewuljctysj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmdGpveXJnZ2Nld3VsamN0eXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2Mzc3MTAsImV4cCI6MjAyNjIxMzcxMH0.SEYn_DUU26-ERYzjxgyN4C50jNfYls-oW_t2olsHzUE");

async function resumeEducation() {
    try {
        let { data: schools, error } = await supabase
            .from('Resume_Education')
            .select('*');
        
        if (error) {
            throw new Error(error.message);
        }
        
        return schools;
    } catch (error) {
        console.error("Error fetching education:", error.message);
        return [];
    }
}

export { resumeEducation };

async function resumeWork() {
    try {
        let { data: works, error } = await supabase
            .from('Resume_Work')
            .select('*');
        
        if (error) {
            throw new Error(error.message);
        }
        
        return works;
    } catch (error) {
        console.error("Error fetching work experience:", error.message);
        return [];
    }
}

export { resumeWork };

async function resumeSkills() {
    try {
        let { data: skills, error } = await supabase
            .from('Resume_Skills')
            .select('*');
        
        if (error) {
            throw new Error(error.message);
        }
        
        return skills;
    } catch (error) {
        console.error("Error fetching skills:", error.message);
        return [];
    }
}

export { resumeSkills };
