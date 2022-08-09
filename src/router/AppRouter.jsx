import { Navigate, Route, Routes } from "react-router-dom"

import { HomePage, AboutPage, ContactUs, FrequencyQuestions, Patients, InvisalignPage, MetalBracketsPage, Itero, EmpowerBrackets } from "../services/pages"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="itero" element={<Itero />} />
                <Route path="contact" element={<ContactUs />} />
                <Route path="frequency" element={<FrequencyQuestions />} />
                <Route path="patients" element={<Patients />} />
                <Route path="invisalign" element={<InvisalignPage />} />
                <Route path="empowerbrackets" element={<EmpowerBrackets />} />
                <Route path="metalbrackets" element={<MetalBracketsPage />} />
                
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}