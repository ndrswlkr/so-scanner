export function saveSettings(settings){
    localStorage.setItem('settings', JSON.stringify(settings))
}

export function loadSettings(){
    const store = localStorage.getItem('settings')
    if (!store) return null
    const settings = JSON.parse( store)
    return settings
}