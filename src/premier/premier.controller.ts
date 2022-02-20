/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Patch } from '@nestjs/common';

@Controller('premier')
export class PremierController {
    @Get()
    getPremier(): string{
        return "Get Premier"
    }

    @Post() 
    postPremier(): string {
        return "Post Premier"
    }
    @Delete ()
    deletePremier(): string {
        return "Delete Premier"
    }
    @Put()
    putPremier(): string {
        return "Put Premier"
    }
    @Patch()
    patchPremier(): string {
        return "Patch Premier"
    }
}
