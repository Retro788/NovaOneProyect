import { svgLogo } from "../../assets/logo"
import {
  moonsDistanceFactor,
  moonsRotationSpeed,
  objectsRotationSpeed,
  planetsScaleFactor,
  relativeEarthSizeDependOnDistance,
  starsScaleFactor,
} from "../../data/solarSystemData"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import StepContent from "@mui/material/StepContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useState } from "react"

// Stepper content updated for the presentation
const steps = [
  {
    label: "Planetary Settings",
    description: (
      <div>
        {/* Bold Title */}
        <Typography variant="h6" component="div" gutterBottom>
          <strong>Project Nova One</strong>
        </Typography>
        {/* Small Text */}
        <Typography variant="caption" display="block" gutterBottom>
          Infographic, project, and online simulator by Fernando San Gabriel (RetroTheDev). Please read the following to continue to the simulator and access the complete project.
        </Typography>
        {/* Link to PDF Documentation */}
        <Typography variant="body1" gutterBottom>
          For complete details and to access the official documentation of our project, please open the following document:{" "}
          <a
            href="https://drive.google.com/file/d/18i4fjnBCn1J58Kjr4qgiMhJCUYumjhWs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:underline"
          >
            Official Project Documentation (PDF)
          </a>.
        </Typography>
      </div>
    ),
  },
  {
    label: "Solar System Information",
    description: (
      <div>
        <Typography variant="body1" gutterBottom>
          Explore our project repository on GitHub:{" "}
          <a
            href="https://github.com/Retro788/Modelo-Deteccion-Prediccion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:underline"
          >
            NASA SPACE APPS Detection Model
          </a>. This model utilizes complex neural networks trained differentially to establish detection and prediction patterns for mobility through geometric topology.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our seismic detection project is powered by advanced neural networks and integrated with a solar simulator, enhancing user comprehension and interaction.
        </Typography>
      </div>
    ),
  },
  {
    label: "Interaction Guide",
    description: (
      <div>
        <Typography variant="body1" gutterBottom>
          Watch this{" "}
          <a
            href="https://drive.google.com/file/d/1PTCoOyhjCcO_O-JcMlGX2EfFe-BONdwQ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:underline"
          >
            30-second test video
          </a>{" "}
          to see the interactions in action.
        </Typography>
      </div>
    ),
  },
]

export const OverlayElements = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isBlurActive, setIsBlurActive] = useState(true) // Controls active blur
  const [isAnimating, setIsAnimating] = useState(false) // Controls blur animation
  const [isStepperVisible, setIsStepperVisible] = useState(true) // Controls Stepper visibility

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // Start blur animation on clicking "Finish"
      setIsAnimating(true)
      setIsStepperVisible(false) // Hide Stepper immediately

      // Keep blur animation for 2 seconds
      setTimeout(() => {
        setIsBlurActive(false) // Disable blur after animation
      }, 2000) // 2-second animation duration
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <>
      {/* Gaussian Blur Background with animation */}
      {isBlurActive && (
        <div
          className="absolute inset-0 bg-black/40 z-0 blur-bg pointer-events-none" // Initial blur
          style={{
            backdropFilter: isAnimating ? 'blur(0px)' : 'blur(10px)', // Transition from blur(10px) to blur(0px)
            transition: 'backdrop-filter 2s ease-out, background-color 2s ease-out', // Smooth 2-second animation
            backgroundColor: isAnimating ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.4)', // Background color transition
          }}
        ></div>
      )}

      {/* Vertical Stepper Overlay on the left, positioned lower */}
      {isStepperVisible && (
        <div className="absolute top-32 left-0 h-full flex justify-center z-50"> {/* Position adjusted with top-32 */}
          <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    sx={{
                      paddingLeft: "16px", // Padding adjustment
                    }}
                    optional={
                      index === steps.length - 1 ? (
                        <Typography variant="caption">Last Step</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    {step.description}
                    <Box sx={{ mb: 2 }}>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{
                          mt: 1,
                          mr: 1,
                          backgroundColor: "black", // Black button
                          "&:hover": {
                            backgroundColor: "#333", // Darker color on hover
                          },
                        }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
      )}

      {/* Bottom and Top Overlays */}
      <div className="absolute bottom-0 right-0">
        <div className="flex flex-col">
          <div className="text-xs flex flex-row space-x-3 p-2 text-neutral-50/50">
            <a
              className="text-neutral-50/50 hover:text-purple-500 cursor-pointer"
              href="https://github.com/Retro788"
              target="_blank"
              rel="noopener noreferrer"
            >
              RetroTheDev
            </a>
            <p>|</p>
            <a
              className="text-neutral-50/50 hover:text-purple-500 cursor-pointer"
              href="https://github.com/Retro788/Solar-Seismic-Simulator" // Ensure to update this link if necessary
              target="_blank"
              rel="noopener noreferrer"
            >
              Solar Seismic Simulator
            </a>
            <p>|</p>
          </div>
        </div>
      </div>

      <div className="absolute top-0">
        <div className="w-full select-none m-3 text-neutral-50">
          <div className="flex flex-wrap text-2xs space-x-4 divide-x-2 divide-white/50">
            <a
              className="fill-neutral-50 hover:fill-purple-500 cursor-pointer"
              href="https://github.com/Retro788"
              target="_blank"
              rel="noopener noreferrer"
            >
              {svgLogo}
            </a>
            <div className="pl-4 flex flex-col leading-4 -space-y-1">
              <p>Planets size increased to x{Math.round(planetsScaleFactor / relativeEarthSizeDependOnDistance)}</p>
              <p>Sun size increased to x{Math.round(starsScaleFactor / relativeEarthSizeDependOnDistance)}</p>
              <p>Planets rotation decreased to x{Math.round(objectsRotationSpeed)}</p>
              <p>Moons rotation decreased to x{Math.round(moonsRotationSpeed)}</p>
              <p>Moons distance from planet decreased to x{Math.round(moonsDistanceFactor)}</p>
            </div>
            <div className="pl-4 flex flex-col leading-3">
              <p>Choose a planet with arrows ⟵ / ⟶</p>
              <p>Or click on the planet info</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
