import { Container } from "./Container"
import { useLocation } from "react-router-dom"

export const BredCrumb = () => {
  const { pathname } = useLocation()
  const pathSegments = pathname.split("/").filter(Boolean)

  return (
    <Container>
      <div className="flex gap-4 items-center">
        <h2>Home</h2>
        {pathSegments.map((segment, index) => (
          <span key={`${segment}-${index}`} className="flex items-center gap-2">
            <span>/</span>
            <h2 className="capitalize">{segment.replace(/-/g, " ")}</h2>
          </span>
        ))}
      </div>
    </Container>
  )
}
