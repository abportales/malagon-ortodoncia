import { Navigate, Route, Routes } from "react-router-dom"

import { HomePage, AboutPage, Achievements, ContactUs, FrequencyQuestions, Patients, SuccessStories, InvisalignPage, DamonqPage, MetalBracketsPage } from "../services/pages"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="achievements" element={<Achievements />} />
                <Route path="contact" element={<ContactUs />} />
                <Route path="frequency" element={<FrequencyQuestions />} />
                <Route path="patients" element={<Patients />} />
                <Route path="success" element={<SuccessStories />} />
                <Route path="invisalign" element={<InvisalignPage />} />
                <Route path="damonq" element={<DamonqPage />} />
                <Route path="metalbrackets" element={<MetalBracketsPage />} />
                
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}