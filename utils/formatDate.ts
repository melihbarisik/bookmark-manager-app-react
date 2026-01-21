const MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]

export function formatShortDate(dateString?: string | null) {
    if (!dateString) return "-"

    const date = new Date(dateString)

    const day = date.getUTCDate()
    const month = MONTHS[date.getUTCMonth()]


    return `${day} ${month}`
}
