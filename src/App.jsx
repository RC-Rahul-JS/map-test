import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  MapPin, 
  Search, 
  Filter, 
  IndianRupee, 
  Compass, 
  Maximize2, 
  Phone, 
  Mail, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Layers, 
  Sliders, 
  BookOpen, 
  Calculator, 
  Info,
  ChevronRight,
  Sparkles,
  RefreshCw,
  Eye,
  X,
  User,
  Check,
  ZoomIn,
  ZoomOut,
  Maximize,
  Map,
  ShieldCheck,
  Building,
  HelpCircle,
  PenTool
} from 'lucide-react';

import phase2Plots from '../phase2_partial.json';

// Realistic layout coordinates matched directly onto "WhatsApp Image 2026-06-30 at 20.11.01.jpeg"
const initialPlotsData = [
  ...phase2Plots,
  {
    "id": "2",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 524,
    "y": 288,
    "r": 14
  },
  {
    "id": "3",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 493,
    "y": 311,
    "r": 14
  },
  {
    "id": "4",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 479,
    "y": 330,
    "r": 14
  },
  {
    "id": "5",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 458,
    "y": 344,
    "r": 14
  },
  {
    "id": "6",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 443,
    "y": 361,
    "r": 14
  },
  {
    "id": "7",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 421,
    "y": 377,
    "r": 14
  },
  {
    "id": "8",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 411,
    "y": 393,
    "r": 14
  },
  {
    "id": "9",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 390,
    "y": 406,
    "r": 14
  },
  {
    "id": "13",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 314,
    "y": 484,
    "r": 14
  },
  {
    "id": "14",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 292,
    "y": 500,
    "r": 14
  },
  {
    "id": "15",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 279,
    "y": 519,
    "r": 14
  },
  {
    "id": "16",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 263,
    "y": 534,
    "r": 14
  },
  {
    "id": "18",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 286,
    "y": 560,
    "r": 14
  },
  {
    "id": "19",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 309,
    "y": 535,
    "r": 14
  },
  {
    "id": "20",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 329,
    "y": 525,
    "r": 14
  },
  {
    "id": "22",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 362,
    "y": 494,
    "r": 14
  },
  {
    "id": "24",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 402,
    "y": 450,
    "r": 14
  },
  {
    "id": "26",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 440,
    "y": 415,
    "r": 14
  },
  {
    "id": "25",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 420,
    "y": 430,
    "r": 14
  },
  {
    "id": "27",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 455,
    "y": 396,
    "r": 14
  },
  {
    "id": "29",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 483,
    "y": 370,
    "r": 14
  },
  {
    "id": "30",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 504,
    "y": 354,
    "r": 14
  },
  {
    "id": "32",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 542,
    "y": 314,
    "r": 14
  },
  {
    "id": "36",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 639,
    "y": 290,
    "r": 14
  },
  {
    "id": "37",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 622,
    "y": 295,
    "r": 14
  },
  {
    "id": "38",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 610,
    "y": 309,
    "r": 14
  },
  {
    "id": "39",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 392,
    "y": 524,
    "r": 14
  },
  {
    "id": "40",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 370,
    "y": 544,
    "r": 14
  },
  {
    "id": "41",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 357,
    "y": 559,
    "r": 14
  },
  {
    "id": "43",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 325,
    "y": 598,
    "r": 14
  },
  {
    "id": "44",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 304,
    "y": 608,
    "r": 14
  },
  {
    "id": "45",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 290,
    "y": 627,
    "r": 14
  },
  {
    "id": "46",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 315,
    "y": 652,
    "r": 14
  },
  {
    "id": "47",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 332,
    "y": 628,
    "r": 14
  },
  {
    "id": "49",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 365,
    "y": 602,
    "r": 14
  },
  {
    "id": "50",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 381,
    "y": 585,
    "r": 14
  },
  {
    "id": "52",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 413,
    "y": 549,
    "r": 14
  },
  {
    "id": "54",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 652,
    "y": 320,
    "r": 14
  },
  {
    "id": "55",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 665,
    "y": 310,
    "r": 14
  },
  {
    "id": "56",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 676,
    "y": 296,
    "r": 14
  },
  {
    "id": "57",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 688,
    "y": 284,
    "r": 14
  },
  {
    "id": "58",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 711,
    "y": 336,
    "r": 14
  },
  {
    "id": "59",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 690,
    "y": 352,
    "r": 14
  },
  {
    "id": "60",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 673,
    "y": 366,
    "r": 14
  },
  {
    "id": "63",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 630,
    "y": 410,
    "r": 14
  },
  {
    "id": "64",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 593,
    "y": 436,
    "r": 14
  },
  {
    "id": "65",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 579,
    "y": 455,
    "r": 14
  },
  {
    "id": "66",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 559,
    "y": 464,
    "r": 14
  },
  {
    "id": "68",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 532,
    "y": 490,
    "r": 14
  },
  {
    "id": "69",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 516,
    "y": 505,
    "r": 14
  },
  {
    "id": "70",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 498,
    "y": 518,
    "r": 14
  },
  {
    "id": "71",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 488,
    "y": 534,
    "r": 14
  },
  {
    "id": "72",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 473,
    "y": 543,
    "r": 14
  },
  {
    "id": "74",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 433,
    "y": 607,
    "r": 14
  },
  {
    "id": "73",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 452,
    "y": 588,
    "r": 14
  },
  {
    "id": "75",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 417,
    "y": 624,
    "r": 14
  },
  {
    "id": "76",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 399,
    "y": 641,
    "r": 14
  },
  {
    "id": "77",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 384,
    "y": 656,
    "r": 14
  },
  {
    "id": "78",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 371,
    "y": 670,
    "r": 14
  },
  {
    "id": "79",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 349,
    "y": 689,
    "r": 14
  },
  {
    "id": "80",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 370,
    "y": 708,
    "r": 14
  },
  {
    "id": "81",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 390,
    "y": 690,
    "r": 14
  },
  {
    "id": "82",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 407,
    "y": 675,
    "r": 14
  },
  {
    "id": "84",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 442,
    "y": 642,
    "r": 14
  },
  {
    "id": "85",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 455,
    "y": 624,
    "r": 14
  },
  {
    "id": "86",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 476,
    "y": 612,
    "r": 14
  },
  {
    "id": "87",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 501,
    "y": 576,
    "r": 14
  },
  {
    "id": "89",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 531,
    "y": 547,
    "r": 14
  },
  {
    "id": "90",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 543,
    "y": 528,
    "r": 14
  },
  {
    "id": "91",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 558,
    "y": 521,
    "r": 14
  },
  {
    "id": "92",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 575,
    "y": 503,
    "r": 14
  },
  {
    "id": "93",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 592,
    "y": 488,
    "r": 14
  },
  {
    "id": "95",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 624,
    "y": 462,
    "r": 14
  },
  {
    "id": "96",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 656,
    "y": 432,
    "r": 14
  },
  {
    "id": "97",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 670,
    "y": 416,
    "r": 14
  },
  {
    "id": "98",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 687,
    "y": 399,
    "r": 14
  },
  {
    "id": "99",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 702,
    "y": 390,
    "r": 14
  },
  {
    "id": "100",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 716,
    "y": 372,
    "r": 14
  },
  {
    "id": "101",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 730,
    "y": 361,
    "r": 14
  },
  {
    "id": "102",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 772,
    "y": 401,
    "r": 14
  },
  {
    "id": "103",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 750,
    "y": 416,
    "r": 14
  },
  {
    "id": "104",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 734,
    "y": 433,
    "r": 14
  },
  {
    "id": "105",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 716,
    "y": 447,
    "r": 14
  },
  {
    "id": "106",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 701,
    "y": 466,
    "r": 14
  },
  {
    "id": "107",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 682,
    "y": 475,
    "r": 14
  },
  {
    "id": "108",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 665,
    "y": 492,
    "r": 14
  },
  {
    "id": "113",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 583,
    "y": 572,
    "r": 14
  },
  {
    "id": "115",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 548,
    "y": 598,
    "r": 14
  },
  {
    "id": "116",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 533,
    "y": 611,
    "r": 14
  },
  {
    "id": "117",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 439,
    "y": 713,
    "r": 14
  },
  {
    "id": "118",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 425,
    "y": 724,
    "r": 14
  },
  {
    "id": "119",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 408,
    "y": 724,
    "r": 14
  },
  {
    "id": "121",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 399,
    "y": 755,
    "r": 14
  },
  {
    "id": "122",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 424,
    "y": 775,
    "r": 14
  },
  {
    "id": "123",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 436,
    "y": 766,
    "r": 14
  },
  {
    "id": "124",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 443,
    "y": 752,
    "r": 14
  },
  {
    "id": "125",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 452,
    "y": 738,
    "r": 14
  },
  {
    "id": "126",
    "phase": "Phase-1",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 469,
    "y": 736,
    "r": 14
  },
  {
    "id": "1",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 319,
    "y": 717,
    "r": 14
  },
  {
    "id": "10",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 191,
    "y": 884,
    "r": 14
  },
  {
    "id": "11",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 180,
    "y": 905,
    "r": 14
  },
  {
    "id": "12",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 164,
    "y": 917,
    "r": 14
  },
  {
    "id": "17",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 117,
    "y": 975,
    "r": 14
  },
  {
    "id": "21",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 143,
    "y": 1023,
    "r": 14
  },
  {
    "id": "23",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 163,
    "y": 996,
    "r": 14
  },
  {
    "id": "28",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 209,
    "y": 939,
    "r": 14
  },
  {
    "id": "31",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 248,
    "y": 887,
    "r": 14
  },
  {
    "id": "33",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 273,
    "y": 857,
    "r": 14
  },
  {
    "id": "34",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 284,
    "y": 841,
    "r": 14
  },
  {
    "id": "35",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 297,
    "y": 824,
    "r": 14
  },
  {
    "id": "42",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 349,
    "y": 813,
    "r": 14
  },
  {
    "id": "48",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 280,
    "y": 899,
    "r": 14
  },
  {
    "id": "51",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 234,
    "y": 953,
    "r": 14
  },
  {
    "id": "53",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 214,
    "y": 979,
    "r": 14
  },
  {
    "id": "61",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 210,
    "y": 1061,
    "r": 14
  },
  {
    "id": "62",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 219,
    "y": 1046,
    "r": 14
  },
  {
    "id": "67",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 272,
    "y": 984,
    "r": 14
  },
  {
    "id": "88",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 248,
    "y": 1050,
    "r": 14
  },
  {
    "id": "83",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 299,
    "y": 987,
    "r": 14
  },
  {
    "id": "94",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 281,
    "y": 1073,
    "r": 14
  },
  {
    "id": "109",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 329,
    "y": 1116,
    "r": 14
  },
  {
    "id": "110",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 340,
    "y": 1103,
    "r": 14
  },
  {
    "id": "111",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 351,
    "y": 1089,
    "r": 14
  },
  {
    "id": "112",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 361,
    "y": 1079,
    "r": 14
  },
  {
    "id": "114",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 378,
    "y": 1054,
    "r": 14
  },
  {
    "id": "120",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 351,
    "y": 1127,
    "r": 14
  },
  {
    "id": "127",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 449,
    "y": 1108,
    "r": 14
  },
  {
    "id": "128",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 439,
    "y": 1119,
    "r": 14
  },
  {
    "id": "129",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 431,
    "y": 1129,
    "r": 14
  },
  {
    "id": "130",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 422,
    "y": 1145,
    "r": 14
  },
  {
    "id": "131",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 410,
    "y": 1155,
    "r": 14
  },
  {
    "id": "175",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 366,
    "y": 1001,
    "r": 14
  },
  {
    "id": "154",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 388,
    "y": 1023,
    "r": 14
  },
  {
    "id": "155",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 401,
    "y": 1011,
    "r": 14
  },
  {
    "id": "156",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 409,
    "y": 997,
    "r": 14
  },
  {
    "id": "157",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 419,
    "y": 985,
    "r": 14
  },
  {
    "id": "158",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 428,
    "y": 974,
    "r": 14
  },
  {
    "id": "159",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 437,
    "y": 963,
    "r": 14
  },
  {
    "id": "160",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 444,
    "y": 951,
    "r": 14
  },
  {
    "id": "161",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 455,
    "y": 939,
    "r": 14
  },
  {
    "id": "162",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 467,
    "y": 925,
    "r": 14
  },
  {
    "id": "163",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 475,
    "y": 913,
    "r": 14
  },
  {
    "id": "164",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 485,
    "y": 900,
    "r": 14
  },
  {
    "id": "174",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 375,
    "y": 991,
    "r": 14
  },
  {
    "id": "165",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 463,
    "y": 879,
    "r": 14
  },
  {
    "id": "166",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 453,
    "y": 893,
    "r": 14
  },
  {
    "id": "167",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 443,
    "y": 904,
    "r": 14
  },
  {
    "id": "168",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 435,
    "y": 917,
    "r": 14
  },
  {
    "id": "169",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 423,
    "y": 928,
    "r": 14
  },
  {
    "id": "170",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 415,
    "y": 940,
    "r": 14
  },
  {
    "id": "171",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 405,
    "y": 952,
    "r": 14
  },
  {
    "id": "172",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 399,
    "y": 966,
    "r": 14
  },
  {
    "id": "173",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 387,
    "y": 977,
    "r": 14
  },
  {
    "id": "153",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 427,
    "y": 1051,
    "r": 14
  },
  {
    "id": "152",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 437,
    "y": 1038,
    "r": 14
  },
  {
    "id": "151",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 447,
    "y": 1026,
    "r": 14
  },
  {
    "id": "150",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 455,
    "y": 1015,
    "r": 14
  },
  {
    "id": "149",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 463,
    "y": 1002,
    "r": 14
  },
  {
    "id": "148",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 476,
    "y": 992,
    "r": 14
  },
  {
    "id": "147",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 482,
    "y": 977,
    "r": 14
  },
  {
    "id": "146",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 495,
    "y": 968,
    "r": 14
  },
  {
    "id": "132",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 447,
    "y": 1065,
    "r": 14
  },
  {
    "id": "133",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 458,
    "y": 1051,
    "r": 14
  },
  {
    "id": "134",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 465,
    "y": 1039,
    "r": 14
  },
  {
    "id": "135",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 474,
    "y": 1025,
    "r": 14
  },
  {
    "id": "136",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 485,
    "y": 1015,
    "r": 14
  },
  {
    "id": "137",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 493,
    "y": 1003,
    "r": 14
  },
  {
    "id": "E-1",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 536,
    "y": 903,
    "r": 14
  },
  {
    "id": "E-2",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 540,
    "y": 893,
    "r": 14
  },
  {
    "id": "E-3",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 548,
    "y": 888,
    "r": 14
  },
  {
    "id": "E-4",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 553,
    "y": 879,
    "r": 14
  },
  {
    "id": "E-5",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 556,
    "y": 871,
    "r": 14
  },
  {
    "id": "E-6",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 561,
    "y": 865,
    "r": 14
  },
  {
    "id": "E-7",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 565,
    "y": 854,
    "r": 14
  },
  {
    "id": "E-8",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 571,
    "y": 847,
    "r": 14
  },
  {
    "id": "E-9",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 568,
    "y": 839,
    "r": 14
  },
  {
    "id": "E-10",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 581,
    "y": 836,
    "r": 14
  },
  {
    "id": "E-11",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 553,
    "y": 819,
    "r": 14
  },
  {
    "id": "E-12",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 549,
    "y": 829,
    "r": 14
  },
  {
    "id": "179",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 542,
    "y": 845,
    "r": 14
  },
  {
    "id": "178",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 539,
    "y": 855,
    "r": 14
  },
  {
    "id": "177",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 527,
    "y": 869,
    "r": 14
  },
  {
    "id": "176",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 515,
    "y": 884,
    "r": 14
  },
  {
    "id": "138",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 500,
    "y": 992,
    "r": 14
  },
  {
    "id": "139",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 510,
    "y": 982,
    "r": 14
  },
  {
    "id": "140",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 521,
    "y": 968,
    "r": 14
  },
  {
    "id": "141",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 529,
    "y": 957,
    "r": 14
  },
  {
    "id": "142",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 538,
    "y": 947,
    "r": 14
  },
  {
    "id": "145",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 501,
    "y": 955,
    "r": 14
  },
  {
    "id": "144",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 511,
    "y": 943,
    "r": 14
  },
  {
    "id": "143",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 521,
    "y": 930,
    "r": 14
  },
  {
    "id": "L-1",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 575,
    "y": 930,
    "r": 14
  },
  {
    "id": "L-2",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 583,
    "y": 919,
    "r": 14
  },
  {
    "id": "L-3",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 587,
    "y": 909,
    "r": 14
  },
  {
    "id": "L-4",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 593,
    "y": 903,
    "r": 14
  },
  {
    "id": "L-5",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 591,
    "y": 894,
    "r": 14
  },
  {
    "id": "L-6",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 606,
    "y": 892,
    "r": 14
  },
  {
    "id": "L-7",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 603,
    "y": 881,
    "r": 14
  },
  {
    "id": "L-8",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 614,
    "y": 877,
    "r": 14
  },
  {
    "id": "L-9",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 612,
    "y": 861,
    "r": 14
  },
  {
    "id": "2",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 306,
    "y": 741,
    "r": 14
  },
  {
    "id": "3",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 293,
    "y": 755,
    "r": 14
  },
  {
    "id": "4",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 277,
    "y": 777,
    "r": 14
  },
  {
    "id": "5",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 266,
    "y": 798,
    "r": 14
  },
  {
    "id": "6",
    "phase": "Phase-2",
    "status": "available",
    "size": 1000,
    "price": 3000000,
    "facing": "East",
    "vastu": 90,
    "type": "Standard",
    "description": "Auto-mapped plot.",
    "x": 248,
    "y": 808,
    "r": 14
  },
  { "id": "7", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 237, "y": 827, "r": 14 },
  { "id": "8", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 223, "y": 849, "r": 14 },
  { "id": "9", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 209, "y": 861, "r": 14 },
  { "id": "13", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 150, "y": 933, "r": 14 },
  { "id": "14", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 144, "y": 944, "r": 14 },
  { "id": "15", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 138, "y": 955, "r": 14 },
  { "id": "16", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 129, "y": 965, "r": 14 },
  { "id": "18", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 109, "y": 983, "r": 14 },
  { "id": "19", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 98, "y": 998, "r": 14 },
  { "id": "20", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 131, "y": 1038, "r": 14 },
  { "id": "22", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 151, "y": 1010, "r": 14 },
  { "id": "24", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 174, "y": 986, "r": 14 },
  { "id": "25", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 179, "y": 971, "r": 14 },
  { "id": "26", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 190, "y": 966, "r": 14 },
  { "id": "27", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 200, "y": 951, "r": 14 },
  { "id": "29", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 221, "y": 927, "r": 14 },
  { "id": "30", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 238, "y": 903, "r": 14 },
  { "id": "32", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 264, "y": 870, "r": 14 },
  { "id": "36", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 313, "y": 813, "r": 14 },
  { "id": "37", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 325, "y": 797, "r": 14 },
  { "id": "38", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 336, "y": 781, "r": 14 },
  { "id": "39", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 349, "y": 762, "r": 14 },
  { "id": "40", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 376, "y": 777, "r": 14 },
  { "id": "41", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 358, "y": 801, "r": 14 },
  { "id": "43", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 334, "y": 827, "r": 14 },
  { "id": "44", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 323, "y": 847, "r": 14 },
  { "id": "45", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 315, "y": 862, "r": 14 },
  { "id": "46", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 297, "y": 873, "r": 14 },
  { "id": "47", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 289, "y": 884, "r": 14 },
  { "id": "49", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 267, "y": 922, "r": 14 },
  { "id": "50", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 245, "y": 943, "r": 14 },
  { "id": "52", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 223, "y": 969, "r": 14 },
  { "id": "54", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 206, "y": 995, "r": 14 },
  { "id": "55", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 195, "y": 1006, "r": 14 },
  { "id": "56", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 186, "y": 1019, "r": 14 },
  { "id": "57", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 178, "y": 1029, "r": 14 },
  { "id": "58", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 169, "y": 1042, "r": 14 },
  { "id": "59", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 158, "y": 1057, "r": 14 },
  { "id": "60", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 198, "y": 1073, "r": 14 },
  { "id": "63", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 230, "y": 1033, "r": 14 },
  { "id": "64", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 241, "y": 1023, "r": 14 },
  { "id": "65", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 250, "y": 1011, "r": 14 },
  { "id": "66", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 258, "y": 999, "r": 14 },
  { "id": "68", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 279, "y": 971, "r": 14 },
  { "id": "91", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 222, "y": 1082, "r": 14 },
  { "id": "69", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 354, "y": 891, "r": 14 },
  { "id": "70", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 365, "y": 879, "r": 14 },
  { "id": "71", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 372, "y": 866, "r": 14 },
  { "id": "72", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 381, "y": 853, "r": 14 },
  { "id": "73", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 390, "y": 844, "r": 14 },
  { "id": "74", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 401, "y": 831, "r": 14 },
  { "id": "75", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 410, "y": 817, "r": 14 },
  { "id": "76", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 432, "y": 838, "r": 14 },
  { "id": "77", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 424, "y": 850, "r": 14 },
  { "id": "78", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 414, "y": 863, "r": 14 },
  { "id": "79", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 405, "y": 873, "r": 14 },
  { "id": "80", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 395, "y": 885, "r": 14 },
  { "id": "81", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 386, "y": 899, "r": 14 },
  { "id": "82", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 378, "y": 909, "r": 14 },
  { "id": "84", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 286, "y": 998, "r": 14 },
  { "id": "85", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 281, "y": 1012, "r": 14 },
  { "id": "86", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 267, "y": 1022, "r": 14 },
  { "id": "87", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 259, "y": 1035, "r": 14 },
  { "id": "89", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 238, "y": 1062, "r": 14 },
  { "id": "90", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 229, "y": 1071, "r": 14 },
  { "id": "92", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 261, "y": 1100, "r": 14 },
  { "id": "93", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 271, "y": 1083, "r": 14 },
  { "id": "95", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 293, "y": 1061, "r": 14 },
  { "id": "96", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 302, "y": 1048, "r": 14 },
  { "id": "97", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 309, "y": 1038, "r": 14 },
  { "id": "98", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 318, "y": 1025, "r": 14 },
  { "id": "99", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 330, "y": 1013, "r": 14 },
  { "id": "100", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 347, "y": 1026, "r": 14 },
  { "id": "101", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 338, "y": 1035, "r": 14 },
  { "id": "102", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 330, "y": 1050, "r": 14 },
  { "id": "103", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 322, "y": 1062, "r": 14 },
  { "id": "104", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 313, "y": 1076, "r": 14 },
  { "id": "105", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 302, "y": 1088, "r": 14 },
  { "id": "106", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 292, "y": 1102, "r": 14 },
  { "id": "107", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 280, "y": 1109, "r": 14 },
  { "id": "108", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 322, "y": 1125, "r": 14 },
  { "id": "113", "phase": "Phase-2", "status": "available", "size": 1000, "price": 3000000, "facing": "East", "vastu": 90, "type": "Standard", "description": "Auto-mapped plot.", "x": 368, "y": 1065, "r": 14 }
];

export default function App() {
  const [plots, setPlots] = useState(initialPlotsData);
  const [selectedPlot, setSelectedPlot] = useState(null);
  
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [hovered360, setHovered360] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPlot, setHoveredPlot] = useState(null);
  const [showMobileDetails, setShowMobileDetails] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const handleResetMap = () => {
    if (isMobile) {
      // Zoom out enough to show the full map width (approx 0.35 to 0.4)
      setZoomLevel(0.38);
      // Center the 900x1200 map horizontally
      const mapScaledWidth = 900 * 0.38;
      const screenWidth = window.innerWidth;
      const offsetX = (screenWidth - mapScaledWidth) / 2;
      setPanOffset({ x: offsetX, y: 20 });
    } else {
      setZoomLevel(0.6);
      setPanOffset({ x: 50, y: 50 });
    }
  };

  useEffect(() => {
    handleResetMap();
  }, [isMobile]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ 
        x: e.touches[0].clientX - panOffset.x, 
        y: e.touches[0].clientY - panOffset.y 
      });
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPanOffset({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleZoom = (direction) => {
    setZoomLevel(prev => {
      const nextZoom = direction === 'in' ? prev + 0.15 : prev - 0.15;
      return Math.min(Math.max(nextZoom, 0.25), 3.0);
    });
  };

  const getPlotMarkerColors = (plot, isSelected) => {
    if (plot.status === "sold") {
      return { fill: "rgba(100, 116, 139, 0.3)", stroke: "rgba(148, 163, 184, 0.9)", text: "#94a3b8" };
    }
    if (plot.phase === "Phase-1") {
      return { fill: isSelected ? "rgba(239, 68, 68, 0.75)" : "rgba(239, 68, 68, 0.45)", stroke: "#ef4444", text: "#ffffff" };
    } else {
      return { fill: isSelected ? "rgba(59, 130, 246, 0.75)" : "rgba(59, 130, 246, 0.45)", stroke: "#3b82f6", text: "#ffffff" };
    }
  };

  // Show hovered plot details first; fall back to selected; fall back to empty
  const activePlot = hoveredPlot || selectedPlot;
  const plotDetails = activePlot ? [
    { emoji: '🔢', label: 'Plot Number', value: `#${activePlot.id}`, pill: false },
    { emoji: '🏘️', label: 'Phase', value: activePlot.phase, pill: false },
    { emoji: '📐', label: 'Plot Size', value: `${activePlot.size} sq.ft (${Math.round(activePlot.size/9)} sq.yd)`, pill: false },
    { emoji: '💰', label: 'Premium Price', value: `₹${(activePlot.price/100000).toFixed(1)} Lakhs`, pill: false },
    { emoji: '🧭', label: 'Facing', value: activePlot.facing, pill: false },
    { emoji: '✨', label: 'Vastu Score', value: `${activePlot.vastu}%`, pill: false },
    { emoji: '✅', label: 'Status', value: activePlot.status === 'sold' ? 'Sold Out' : 'Available', pill: true },
  ] : [
    { emoji: '👆', label: 'Selection', value: 'Hover over a plot to see details', pill: false }
  ];

  return (
    <div
      ref={sectionRef}
      style={{
        background: '#ffffff',
        minHeight: '100vh',
        padding: isMobile ? '40px 20px' : '40px 72px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top border line */}
      <div style={{
        position: 'absolute', top: 0, left: '8%', right: '8%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)',
      }} />

      {/* Decorative dots grid - Neutral */}
      <div style={{
        position: 'absolute', top: 60, right: 40,
        width: 180, height: 180,
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1.5px, transparent 1.5px)',
        backgroundSize: '18px 18px',
        opacity: 0.8,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 60, left: 30,
        width: 130, height: 130,
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1.5px, transparent 1.5px)',
        backgroundSize: '18px 18px',
        opacity: 0.8,
        pointerEvents: 'none',
      }} />

      {/* Main layout */}
      <div style={{
        width: '100%',
        maxWidth: '1700px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '64px' : '10%',
        alignItems: 'flex-start',
      }}>

        {/* LEFT: Map */}
        <div
          className={isVisible ? 'mp-slide-left' : 'mp-hidden'}
          style={{
            display: isMobile && showMobileDetails ? 'none' : 'block',
            flex: isMobile ? 'none' : '1.8',
            width: '100%',
            height: isMobile ? 'calc(100vh - 80px)' : '85vh',
            position: 'relative',
            marginLeft: isMobile ? '0' : '2%',
            borderRadius: 24,
            background: '#f8fafc',
            border: '1px solid rgba(0,0,0,0.05)',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)',
            overflow: 'hidden'
          }}
        >
          {/* Map Controls */}
          <div style={{
            position: 'absolute', top: 16, right: 16, zIndex: 10,
            display: 'flex', flexDirection: 'column', gap: 8
          }}>
            <button 
              onClick={() => handleZoom('in')}
              style={{
                width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
              }}
            >
              <ZoomIn size={16} color="#111827" />
            </button>
            <button 
              onClick={() => handleZoom('out')}
              style={{
                width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
              }}
            >
              <ZoomOut size={16} color="#111827" />
            </button>
            <button 
              onClick={handleResetMap}
              style={{
                width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
              }}
            >
              <Maximize size={16} color="#111827" />
            </button>
          </div>
          
          {/* Legend */}
          <div style={{
            position: 'absolute', bottom: 16, left: 16, zIndex: 10,
            background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)',
            borderRadius: 12, padding: '8px 12px', border: '1px solid rgba(0,0,0,0.1)',
            fontSize: 10, fontWeight: 600, color: '#4b5563', display: 'flex', flexDirection: 'column', gap: 4
          }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444' }}></span> Phase 1
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3b82f6' }}></span> Phase 2
             </div>
          </div>

          <div 
            style={{ 
              width: '100%', 
              height: '100%', 
              cursor: isDragging ? 'grabbing' : 'grab', 
              position: 'relative',
              touchAction: 'none' /* Prevents page scroll while dragging map */
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
          >
            <div 
              style={{
                position: 'absolute', transformOrigin: 'top left', transition: 'transform 0.1s ease-out',
                transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
                width: '900px', height: '1200px'
              }}
            >
              <img
                src="/map.jpg"
                alt="Master Plan Map"
                style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none', userSelect: 'none' }}
              />

              <svg viewBox="0 0 900 1200" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                {plots.map((plot) => {
                  const isSelected = selectedPlot?.id === plot.id && selectedPlot?.phase === plot.phase;
                  const isHovered = hoveredPlot?.id === plot.id && hoveredPlot?.phase === plot.phase;
                  const isActive = isHovered || isSelected;
                  const anyHovered = hoveredPlot !== null;
                  // When something is hovered: show ONLY that plot; hide all others
                  // When nothing hovered: show selected (if any) at full opacity, rest at dim
                  let opacity;
                  if (anyHovered) {
                    opacity = isHovered ? 1 : 0;
                  } else {
                    opacity = isSelected ? 1 : 0.25;
                  }
                  const colors = getPlotMarkerColors(plot, isActive);

                  return (
                    <g 
                      key={`${plot.phase}-${plot.id}`} 
                      style={{
                        cursor: 'pointer',
                        transformOrigin: `${plot.x}px ${plot.y}px`,
                        transform: isActive ? 'scale(0.6)' : 'scale(0.4)',
                        opacity,
                        transition: 'opacity 0.25s ease, transform 0.2s ease',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPlot(plot);
                        if (isMobile) {
                          setShowMobileDetails(true);
                        }
                      }}
                      onMouseEnter={() => setHoveredPlot(plot)}
                      onMouseLeave={() => setHoveredPlot(null)}
                    >
                      {/* Pulsing glow ring on hover */}
                      {isActive && (
                        <>
                          {/* Outer expanding ring */}
                          <circle
                            cx={plot.x} cy={plot.y} r={plot.r + 18}
                            fill="none"
                            stroke={isSelected ? '#fbbf24' : colors.stroke}
                            strokeWidth="2"
                            className="svg-ring-pulse"
                          />
                          {/* Middle steady ring */}
                          <circle
                            cx={plot.x} cy={plot.y} r={plot.r + 8}
                            fill="none"
                            stroke={isSelected ? '#fbbf24' : colors.stroke}
                            strokeWidth="1.5"
                            style={{ opacity: 0.4 }}
                          />
                        </>
                      )}
                      {/* Base Circle — always a small dot */}
                      <circle 
                        cx={plot.x} cy={plot.y} r={plot.r} 
                        fill={colors.fill}
                        stroke={isActive ? (isSelected ? '#fbbf24' : colors.stroke) : colors.stroke}
                        strokeWidth={isActive ? 3 : 1.5}
                        style={{ transition: 'all 0.2s' }}
                      />
                      {/* Label badge — only visible on hover or selected */}
                      {isActive && (
                        <>
                          <rect 
                            x={plot.x - 16} y={plot.y - 28} width="32" height="18" rx="5"
                            fill={isSelected ? '#fbbf24' : '#1e293b'}
                            stroke={isSelected ? '#f59e0b' : colors.stroke}
                            strokeWidth="1.5"
                          />
                          <text 
                            x={plot.x} y={plot.y - 15} textAnchor="middle" 
                            fill={isSelected ? '#000' : '#ffffff'}
                            fontSize="9" fontWeight="bold" fontFamily="monospace"
                          >
                            {plot.id}
                          </text>
                          {/* Small arrow pointing down to circle */}
                          <polygon
                            points={`${plot.x - 4},${plot.y - 11} ${plot.x + 4},${plot.y - 11} ${plot.x},${plot.y - 5}`}
                            fill={isSelected ? '#fbbf24' : '#1e293b'}
                          />
                        </>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* RIGHT: Details panel */}
        <div
          className={isVisible ? 'mp-slide-right' : 'mp-hidden'}
          style={{
            display: isMobile && !showMobileDetails ? 'none' : 'flex',
            flex: isMobile ? 'none' : '1',
            width: '100%',
            flexDirection: 'column',
            gap: 20,
            alignSelf: 'stretch',
            justifyContent: 'center',
            minHeight: isMobile ? 'calc(100vh - 80px)' : 'auto'
          }}
        >
          {/* Mobile Back Button */}
          {isMobile && (
            <button
              onClick={() => setShowMobileDetails(false)}
              style={{
                alignSelf: 'flex-start',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                background: '#f1f5f9',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                color: '#475569',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                marginBottom: 16
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Map
            </button>
          )}

          {/* Heading */}
          <div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              color: '#4b5563',
              margin: '0 0 6px 0',
              letterSpacing: '0.02em',
            }}>
              Discover your perfect space
            </p>
            <h3 style={{
              fontSize: 'clamp(24px, 3vw, 44px)',
              color: '#111827',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              lineHeight: 1.05,
            }}>
              PLOT
              <br />
              <span style={{ color: '#6b7280' }}>DETAILS</span>
            </h3>
            {/* Thin accent line */}
            <div style={{
              marginTop: 12,
              width: 56, height: 3,
              background: 'linear-gradient(90deg, #111827, transparent)',
              borderRadius: 2,
            }} />
          </div>

          {/* Plot detail rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, minHeight: '300px' }}>
            {plotDetails.map((item, i) => (
              <div
                key={i}
                className={isVisible ? `mp-row mp-row-delay-${i}` : 'mp-hidden'}
              >
                {/* Row */}
                <div style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 0',
                }}>
                  {/* Left: icon + label */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: '50%',
                      background: 'rgba(0,0,0,0.03)',
                      border: '1px solid rgba(0,0,0,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 16, flexShrink: 0,
                    }}>
                      {item.emoji}
                    </div>
                    <span style={{
                      fontSize: 11, fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '0.14em',
                      color: '#4b5563',
                      fontFamily: "'Montserrat', sans-serif",
                    }}>
                      {item.label}
                    </span>
                  </div>

                  {/* Right: value */}
                  {item.pill ? (
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      background: item.value === 'Available' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #64748b, #475569)',
                      borderRadius: 30, padding: '5px 14px',
                    }}>
                      <span style={{
                        width: 5, height: 5, borderRadius: '50%',
                        background: '#ffffff', opacity: 0.9,
                        display: 'inline-block',
                        animation: 'mpPulse 2s infinite',
                      }} />
                      <span style={{
                        fontSize: 9, fontWeight: 800,
                        textTransform: 'uppercase', letterSpacing: '0.1em',
                        color: '#ffffff',
                        fontFamily: "'Montserrat', sans-serif",
                      }}>
                        {item.value}
                      </span>
                    </div>
                  ) : (
                    <span style={{
                      fontSize: 13,
                      fontWeight: 800, color: '#111827',
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: '0.02em',
                    }}>
                      {item.value}
                    </span>
                  )}
                </div>

                {/* Divider (not after last) */}
                {i < plotDetails.length - 1 && (
                  <div style={{
                    height: 1,
                    background: 'linear-gradient(90deg, rgba(0,0,0,0.1), rgba(0,0,0,0.02), transparent)',
                  }} />
                )}
              </div>
            ))}
          </div>

          {/* 360° Tour Card */}
          <div
            onClick={() => alert("360 Tour feature coming soon!")}
            onMouseEnter={() => setHovered360(true)}
            onMouseLeave={() => setHovered360(false)}
            className={isVisible ? 'mp-row mp-row-delay-3' : 'mp-hidden'}
            style={{
              position: 'relative',
              borderRadius: 20,
              overflow: 'hidden',
              cursor: 'pointer',
              width: '85%',
              alignSelf: 'flex-start',
              height: isMobile ? '200px' : '200px',
              marginTop: isMobile ? '32px' : '0',
              transform: hovered360 ? 'translateY(-6px) scale(1.015)' : 'translateY(0) scale(1)',
              transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          >
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, #1f2937, #111827)',
            }} />

            <div style={{
              position: 'absolute', inset: 0,
              background: hovered360
                ? 'linear-gradient(120deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 100%)'
                : 'linear-gradient(120deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 100%)',
              transition: 'background 0.4s',
            }} />

            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center',
              padding: '0 32px', gap: 22,
            }}>
              <div style={{
                width: 50, height: 50, borderRadius: '50%',
                background: hovered360
                  ? 'linear-gradient(135deg, #fbbf24, #d97706)'
                  : 'rgba(255,255,255,0.95)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: hovered360 ? '#ffffff' : '#111827',
                flexShrink: 0,
                transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              <div>
                <p style={{
                  margin: '0 0 2px 0', fontSize: 10,
                  textTransform: 'uppercase', letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
                }}>
                  Interactive
                </p>
                <p style={{
                  margin: 0, fontSize: 22, fontWeight: 900,
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#ffffff', letterSpacing: '0.04em', lineHeight: 1,
                  textShadow: '0 2px 16px rgba(0,0,0,0.5)',
                }}>
                  360° TOUR
                </p>
                <p style={{
                  margin: '6px 0 0 0', fontSize: 11,
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em',
                  transition: 'color 0.3s',
                }}>
                  {hovered360 ? 'Click to explore →' : 'Explore the colony'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .mp-hidden { opacity: 0; }

        .mp-slide-left {
          animation: mpSlideLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .mp-slide-right {
          animation: mpSlideRight 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
          opacity: 0;
        }

        .mp-row {
          animation: mpFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .mp-row-delay-0 { animation-delay: 0.25s; }
        .mp-row-delay-1 { animation-delay: 0.38s; }
        .mp-row-delay-2 { animation-delay: 0.51s; }
        .mp-row-delay-3 { animation-delay: 0.64s; }
        .mp-row-delay-4 { animation-delay: 0.77s; }

        @keyframes mpSlideLeft {
          from { opacity: 0; transform: translateX(-48px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes mpSlideRight {
          from { opacity: 0; transform: translateX(48px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes mpFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes mpPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* SVG-safe ring pulse — only animates opacity & stroke-width */
        @keyframes svgRingPulse {
          0%   { opacity: 0.7; stroke-width: 2; r: calc(var(--base-r) + 18px); }
          50%  { opacity: 0.1; stroke-width: 5; }
          100% { opacity: 0.7; stroke-width: 2; }
        }

        .svg-ring-pulse {
          animation: svgRingPulseAnim 1.6s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        @keyframes svgRingPulseAnim {
          0%   { opacity: 0.8; transform: scale(1); }
          50%  { opacity: 0;   transform: scale(1.6); }
          100% { opacity: 0.8; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}