import { useEffect, useState } from 'react'
import Papa from 'papaparse'

const SHEET_BASE = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS6kVrFOYZ2MWZvM50RTzbjKzn0OlitOMzIxX6LVL4-Eo7Sq4QzrcqOTxJYn6nfXso5qIgRMypFAp3L'
const GIDS = {
  about: '1445715177',
  education: '1391715149',
  career: '1093973133',
  projects: '1402854582',
  certifications: '735670456', // Replace this with your actual GID
}

const buildCSVUrl = (gid) => `${SHEET_BASE}/pub?gid=${gid}&single=true&output=csv`

const clean = str =>
  str?.replace(/^"|"$/g, '')
    ?.replace(/\r?\n|\r/g, ' ')
    ?.replace(/\(\)/g, '')
    ?.trim()

const usePortfolioData = () => {
  const [about, setAbout] = useState('')
  const [education, setEducation] = useState([])
  const [career, setCareer] = useState([])
  const [projects, setProjects] = useState([])
  const [certifications, setCertifications] = useState([])

  useEffect(() => {
    fetchAbout()
    fetchEducation()
    fetchCareer()
    fetchProjects()
    fetchCertifications()
  }, [])

  const fetchCSV = async (gid) => {
    const res = await fetch(buildCSVUrl(gid))
    const text = await res.text()
    return new Promise((resolve) =>
      Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => resolve(results.data),
      })
    )
  }

  const fetchAbout = async () => {
    const data = await fetchCSV(GIDS.about)
    const first = data?.[0]?.summary || ''
    setAbout(clean(first))
  }

  const fetchEducation = async () => {
    const data = await fetchCSV(GIDS.education)
    const cleaned = data.map(row => ({
      degree: clean(row.degree),
      institution: clean(row.institution),
      year: clean(row.year),
      bullets: Object.keys(row)
        .filter(k => k.startsWith('bullet'))
        .map(k => clean(row[k]))
        .filter(Boolean),
    })).filter(e => e.degree && e.institution)
    setEducation(cleaned)
  }

  const fetchCareer = async () => {
    const data = await fetchCSV(GIDS.career)
    const cleaned = data.map(row => ({
      title: clean(row.title),
      company: clean(row.company),
      dates: clean(row.dates),
      location: clean(row.location),
      bullets: Object.keys(row)
        .filter(k => k.startsWith('bullet'))
        .map(k => clean(row[k]))
        .filter(Boolean),
    })).filter(e => e.title && e.company)
    setCareer(cleaned)
  }

  const fetchProjects = async () => {
    const data = await fetchCSV(GIDS.projects)
    const cleaned = data.map(row => ({
      name: clean(row.name),
      slug: clean(row.slug),
      description: clean(row.description),
      tech: clean(row.tech),
      link: clean(row.link),
      imageUrl: clean(row.imageUrl),
      bullets: Object.keys(row)
        .filter(k => k.startsWith('bullet'))
        .map(k => clean(row[k]))
        .filter(Boolean),
    })).filter(e => e.name && e.slug)
    setProjects(cleaned)
  }

  const fetchCertifications = async () => {
    const data = await fetchCSV(GIDS.certifications)
    const cleaned = data.map(row => ({
      title: clean(row.title),
      issuer: clean(row.issuer),
      date: clean(row.date),
      description: clean(row.description),
      certificateUrl: clean(row.certificateUrl),
    })).filter(cert => cert.title && cert.issuer)
    setCertifications(cleaned)
  }

  return {
    about,
    education,
    career,
    projects,
    certifications,
  }
}

export default usePortfolioData
