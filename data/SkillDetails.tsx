import React from "react"
interface SkillTypes {
  name: string
  icon: any
  details?: string
}
function useGetSkillDetails() {
  let SkillDetails: SkillTypes[] = [
    {
      name: "Spline",
      icon: (
        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_5_28)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.646 2.22975C11.7504 2.27142 11.8399 2.34342 11.903 2.43647C11.9661 2.52951 11.9999 2.63933 12 2.75175V9.24825C11.9999 9.36067 11.9661 9.47049 11.903 9.56353C11.8399 9.65658 11.7504 9.72858 11.646 9.77025L6.2085 11.9453C6.07441 11.9989 5.92484 11.9989 5.79075 11.9453L0.35325 9.77025C0.248977 9.72846 0.159604 9.65641 0.0966454 9.56338C0.0336867 9.47034 2.61449e-05 9.36059 0 9.24825L0 2.75175C2.61449e-05 2.63942 0.0336867 2.52966 0.0966454 2.43663C0.159604 2.34359 0.248977 2.27154 0.35325 2.22975L5.58225 0.138001L5.58525 0.137251L5.79075 0.0547505C5.92506 0.000925044 6.07494 0.000925044 6.20925 0.0547505L6.41475 0.137251L6.41775 0.138001L11.646 2.22975ZM10.6155 2.625L6 4.4715L1.3845 2.625L0.75 2.87925V3.17925L5.625 5.12925V11.0708L6 11.2208L6.375 11.0708V5.13L11.25 3.18V2.88L10.6155 2.625Z"
              fill="url(#paint0_linear_5_28)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_5_28"
              x1="1.5"
              y1="2.5"
              x2="10"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FD0606" />
              <stop offset="1" stop-color="#0E39D0" stopOpacity="0.96" />
            </linearGradient>
            <clipPath id="clip0_5_28">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      details:
        "I'm a dedicated 3D designer with a strong passion for pushing the boundaries of creativity and design. My journey in the world of 3D art began with the discovery of Spline 3D Editor, which has since become my go-to tool for bringing my ideas to life. I am constantly exploring new techniques, learning from the community, and striving to enhance my skills in 3D design.",
    },
    {
      name: "Aninx",
      icon: (
        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_5_30)">
            <path
              d="M9 0H3C2.60218 0 2.22064 0.158035 1.93934 0.43934C1.65804 0.720644 1.5 1.10218 1.5 1.5V10.5C1.5 10.8978 1.65804 11.2794 1.93934 11.5607C2.22064 11.842 2.60218 12 3 12H9C9.39782 12 9.77936 11.842 10.0607 11.5607C10.342 11.2794 10.5 10.8978 10.5 10.5V1.5C10.5 1.10218 10.342 0.720644 10.0607 0.43934C9.77936 0.158035 9.39782 0 9 0ZM4.5 4.41225C4.49999 4.3459 4.51758 4.28074 4.55097 4.22341C4.58437 4.16607 4.63238 4.11863 4.69011 4.08592C4.74783 4.05321 4.8132 4.03639 4.87955 4.0372C4.94589 4.038 5.01084 4.0564 5.06775 4.0905L7.71375 5.67825C7.76937 5.71154 7.8154 5.75869 7.84737 5.81508C7.87933 5.87147 7.89613 5.93518 7.89613 6C7.89613 6.06482 7.87933 6.12853 7.84737 6.18492C7.8154 6.24131 7.76937 6.28846 7.71375 6.32175L5.06775 7.9095C5.01078 7.94364 4.94577 7.96203 4.87936 7.9628C4.81295 7.96358 4.74753 7.9467 4.68978 7.9139C4.63204 7.88109 4.58404 7.83354 4.55069 7.77611C4.51735 7.71867 4.49985 7.65341 4.5 7.587V4.41225Z"
              fill="#8F43EE"
            />
          </g>
          <defs>
            <clipPath id="clip0_5_30">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      details:
        "I'm a dedicated animator with a deep passion for storytelling through motion and 3D animation. My journey in the world of animation began with the discovery of Spline 3D Editor, which has since become my primary tool for bringing my ideas to life. I'm constantly exploring new techniques, learning from the animation community, and striving to push the boundaries of what's possible with animation.",
    },
    {
      name: "Figma",
      icon: (
        <svg
          viewBox="0 0 329 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6_9)">
            <mask
              id="mask0_6_9"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="329"
              height="400"
            >
              <path d="M329 0H0V400H329V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_6_9)">
              <path d="M329 0H0V400H329V0Z" fill="none" />
              <path
                d="M64 106C64 78.3858 86.3858 56 114 56H164V156H114C86.3858 156 64 133.614 64 106Z"
                fill="#D80032"
              />
              <path
                d="M164 56H214C241.614 56 264 78.3858 264 106C264 133.614 241.614 156 214 156H164V56Z"
                fill="#FF7676"
              />
              <path
                d="M64 206C64 178.386 86.3858 156 114 156H164V256H114C86.3858 256 64 233.614 64 206Z"
                fill="#B15EFF"
              />
              <path
                d="M64 306C64 278.386 86.3858 256 114 256H164V306C164 333.614 141.614 356 114 356C86.3858 356 64 333.614 64 306Z"
                fill="#6BCB77"
              />
              <path
                d="M264 206C264 178.386 241.614 156 214 156C186.386 156 164 178.386 164 206C164 233.614 186.386 256 214 256C241.614 256 264 233.614 264 206Z"
                fill="#34B3F1"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_6_9">
              <rect width="329" height="400" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      details:
        "I'm a dedicated designer with a strong passion for creating visually appealing and user-friendly designs. Figma has played a crucial role in my design journey, allowing me to collaborate seamlessly with teams and clients while bringing my creative concepts to life. I am continually exploring new design trends and techniques to deliver the best possible design solutions.",
    },
  ]

  return { SkillDetails }
}

export default useGetSkillDetails
