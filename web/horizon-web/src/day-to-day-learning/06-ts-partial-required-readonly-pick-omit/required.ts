interface Settings {
  theme?: string
  notifications?: boolean
  autoSave?: boolean
}

// Required makes all properties of the Settings type required, ensuring that all fields must be provided when creating a settings object.
function createSettings(settings: Required<Settings>): void {
  console.log('User Settings:', settings)
}

// Example usage of Required utility type --> As all the properties of the Settings type are optional, we need to provide all the properties when creating a userSettings object, otherwise TypeScript will throw an error.
const userSettings: Required<Settings> = {
  theme: 'dark',
  notifications: true,
  autoSave: false,
}

const printUserSettings = () => {
  createSettings(userSettings)
}

export { printUserSettings }
