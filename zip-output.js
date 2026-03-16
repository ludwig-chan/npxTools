#!/usr/bin/env node
import { execSync } from 'child_process'
import { createWriteStream, rmSync } from 'fs'
import archiver from 'archiver'

const hash = execSync('git rev-parse --short HEAD').toString().trim()
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))
const fileName = `${pkg.name}-${hash}.zip`
// ... 打包 .output 到 fileName
