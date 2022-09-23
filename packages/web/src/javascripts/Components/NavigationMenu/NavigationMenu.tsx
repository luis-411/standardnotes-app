import Icon from '../Icon/Icon'
import { AppPaneId } from '../ResponsivePane/AppPaneMetadata'
import { useResponsiveAppPane } from '../ResponsivePane/ResponsivePaneProvider'

export const NavigationMenuButton = () => {
  const { toggleAppPane } = useResponsiveAppPane()

  return (
    <button
      className="bg-text-padding mr-3 inline-flex h-8 min-w-8 cursor-pointer items-center justify-center rounded-full border border-solid border-border align-middle text-neutral hover:bg-contrast focus:bg-contrast md:hidden"
      onClick={() => {
        toggleAppPane(AppPaneId.Navigation)
      }}
      title="Navigation menu"
      aria-label="Navigation menu"
    >
      <Icon type="menu-variant" />
    </button>
  )
}